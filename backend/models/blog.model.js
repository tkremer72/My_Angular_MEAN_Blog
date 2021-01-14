const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  is_deleted: { type: Boolean, required: false, default: false },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true }
});

module.exports = mongoose.model('Blog', blogSchema);
