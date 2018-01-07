var mongoose = require('mongoose')
var Schema = mongoose.Schema
var projectSchema = new Schema( {
          name: String,
          description: String,
          type:String,
          contact_detail:{
            contact_type:String,
            contact_info:String,
            contact_name:String
          },
          location:{
            country:String,
            city:String
          },
          created_at:Date,
          updated_at:Date
      });
var Project = mongoose.model('project', projectSchema);

module.exports = Project;
