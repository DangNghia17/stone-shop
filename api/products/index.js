const Product = require('../../backend/models/Product');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    switch (req.method) {
      case 'GET':
        // Get all products with filters
        const { category, search, page = 1, limit = 12 } = req.query;
        let query = {};

        if (category && category !== 'all') {
          query.category = category;
        }

        if (search) {
          query.$or = [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } }
          ];
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);
        const products = await Product.find(query)
          .skip(skip)
          .limit(parseInt(limit))
          .sort({ createdAt: -1 });

        const total = await Product.countDocuments(query);

        res.status(200).json({
          products,
          pagination: {
            current: parseInt(page),
            total: Math.ceil(total / parseInt(limit)),
            hasNext: skip + products.length < total,
            hasPrev: parseInt(page) > 1
          }
        });
        break;

      case 'POST':
        // Create new product (require auth)
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
          return res.status(401).json({ message: 'Không có quyền truy cập' });
        }

        // Verify token logic here...
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Products API error:', error);
    res.status(500).json({ message: 'Lỗi server' });
  }
}
