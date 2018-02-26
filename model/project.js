const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const projectSchema = new Schema({
  name: String,
  description: String,
  category: String,
  contact_detail: {
    contact_type: String,
    contact_info: String,
    contact_name: String,
  },
  location: {
    country: String,
    city: String,
  },
  created_at: Date,
  updated_at: Date,
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
