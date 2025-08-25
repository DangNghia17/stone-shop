// Script để import dữ liệu mẫu từ /data/data.js vào MongoDB
const mongoose = require('mongoose');
const Product = require('../models/Product');
const products = require('../../data/data');
require('dotenv').config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Imported sample data!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
