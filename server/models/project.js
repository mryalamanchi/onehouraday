const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  contact_detail: {
    contact_type: String,
    contact_info: String,
    contact_name: String
  },
  location: {
    country: String,
    city: String
  },
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('project', projectSchema);
