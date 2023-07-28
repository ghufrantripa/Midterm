const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
