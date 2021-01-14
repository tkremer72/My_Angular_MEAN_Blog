const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  user_email: { type: String, required: true },
  user_name: { type: String, required: true },
  user_street: { type: String, required: true },
  user_city: { type: String, required: true },
  user_state: { type: String, required: true },
  user_zip: { type: String, required: true },
  user_phone: { type: String, required: true },
  user_mobile: { type: String, required: false },
  imagePath: { type: String, required: false },
  is_admin: { type: Boolean, required: false, default: false },
  is_deleted: { type: Boolean, required: false, default: false },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true }
});

module.exports = mongoose.model('User', userSchema);
