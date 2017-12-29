//var mongoose = require('mongoose')
//var project = require('../model/project');

var projectService=require('../service/projectservice')

module.exports.controller = function(app) {
//need to include log folder for logging purpose.
 app.post('/createproject', function(req, res) {
    console.log("In createproject controller :");
    var result=projectService.addProject(req.body,res);
  });

}
