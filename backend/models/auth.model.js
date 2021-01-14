const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const authSchema = mongoose.Schema({
  user_email: { type: String, required: true, unique: true },
  user_password: { type: String, required: true },
  is_deleted: { type: Boolean, required: false, default: false }
});

authSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Auth', authSchema);
