const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  tags: [String],
  status: { type: String, default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
