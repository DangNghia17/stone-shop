require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// DB connect
const connectDB = require('./config/db');
connectDB();



// Routes
const authRoute = require('./routes/auth');
const productRoute = require('./routes/products');
const uploadRoute = require('./routes/upload');
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/upload', uploadRoute);

// Auto-list all API endpoints at /
app.get('/', (req, res) => {
  // Collect all routes
  const routes = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) { // Route registered directly on app
      const methods = Object.keys(middleware.route.methods).map(m => m.toUpperCase()).join(', ');
      routes.push({ path: middleware.route.path, methods });
    } else if (middleware.name === 'router') { // Router middleware
      // Lấy base path từ layer regexp (Express 4)
      let base = '';
      if (middleware.regexp && middleware.regexp.source) {
        // Ví dụ: /^\/api\/products(?:\/(?=$))?$/i => /api/products
        const match = middleware.regexp.source
          .replace('^\\/', '')
          .replace('\\/?(?=\\/|$)', '')
          .replace('(?:\\/)?$', '')
          .replace(/\\\//g, '/')
          .match(/^[^$]+/);
        base = match ? '/' + match[0].replace(/\(\?:\(\?=\$\)\)\?\$/g, '').replace(/\^/g, '').replace(/\$/g, '') : '';
      }
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          const methods = Object.keys(handler.route.methods).map(m => m.toUpperCase()).join(', ');
          routes.push({ path: base + handler.route.path, methods });
        }
      });
    }
  });
  // Render simple HTML
  res.send(`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>StoneShop API</title>
        <style>
          body { font-family: sans-serif; background: #f2e9e4; color: #22223b; }
          h1 { color: #9a8c98; }
          table { border-collapse: collapse; margin: 2rem 0; width: 100%; max-width: 700px; background: #fff; box-shadow: 0 2px 12px #0001; }
          th, td { border: 1px solid #eee; padding: 8px 12px; text-align: left; }
          th { background: #c9ada7; color: #fff; }
          tr:nth-child(even) { background: #f9f6f2; }
        </style>
      </head>
      <body>
        <h1>StoneShop API Endpoints</h1>
        <table>
          <thead><tr><th>Method</th><th>Path</th></tr></thead>
          <tbody>
            ${routes.map(r => `<tr><td>${r.methods}</td><td>${r.path}</td></tr>`).join('')}
          </tbody>
        </table>
        <p style="color:#9a8c98">Auto-generated. Xem README để biết chi tiết tham số, body, xác thực.</p>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
