var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  Name: {
    type: String,
    trim: true,
    required: 'Title required'
  },

  Description: {
    type: String,
    trim: true,
    required: 'Content required'

  },
  
  Price: {
      type: Number,
      trim: true,
      required: 'Price required'
  },
  
  Quantity: {
      type: Number,
      trim: true,
      required: 'Quantity Required'
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
