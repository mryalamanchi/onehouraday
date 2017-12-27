var mongoose = require('mongoose')
var project = require('../model/project');

module.exports.controller = function(app) {
//need to include log folder for logging purpose.
 app.post('/createproject', function(req, res) {
      //console.log("In createproject controller :")
      //console.log("Request data :"+JSON.stringify(req.body))

      var projectData = new project(req.body)
      projectData.created_at=Date.now()
      projectData.updated_at=Date.now()
      //console.log("project data :"+JSON.stringify(projectData))

      projectData.save((error, savedUser) => {
         if (error) {
           console.log(error);
           return res.sendStatus(500)
        }
        //console.log("saved :");
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).json('Saved data');
    })
  });

}
