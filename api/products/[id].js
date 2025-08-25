const Product = require('../../backend/models/Product');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        // Get product by ID
        const product = await Product.findById(id);
        if (!product) {
          return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
        }
        res.status(200).json(product);
        break;

      case 'PUT':
        // Update product (require auth)
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
          return res.status(401).json({ message: 'Không có quyền truy cập' });
        }

        // Verify token logic here...
        const updatedProduct = await Product.findByIdAndUpdate(
          id,
          req.body,
          { new: true, runValidators: true }
        );
        
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
        }
        
        res.status(200).json(updatedProduct);
        break;

      case 'DELETE':
        // Delete product (require auth)
        const deleteToken = req.headers.authorization?.replace('Bearer ', '');
        if (!deleteToken) {
          return res.status(401).json({ message: 'Không có quyền truy cập' });
        }

        // Verify token logic here...
        const deletedProduct = await Product.findByIdAndDelete(id);
        
        if (!deletedProduct) {
          return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
        }
        
        res.status(200).json({ message: 'Xóa sản phẩm thành công' });
        break;

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Product API error:', error);
    res.status(500).json({ message: 'Lỗi server' });
  }
}
