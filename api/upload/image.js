import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Check authentication
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Không có quyền truy cập' });
    }

    // Verify token logic here...
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Handle file upload
    if (!req.body.image) {
      return res.status(400).json({ message: 'Không có file ảnh' });
    }

    // Upload to Cloudinary
    const result = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: 'stone-shop',
      resource_type: 'auto',
    });

    res.status(200).json({
      message: 'Upload thành công',
      url: result.secure_url,
      public_id: result.public_id,
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Lỗi upload' });
  }
}
