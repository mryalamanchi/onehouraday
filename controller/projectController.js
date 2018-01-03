//var mongoose = require('mongoose')
//var project = require('../model/project');

var projectService=require('../service/projectservice')

module.exports.controller = function(app) {
//need to include log folder for logging purpose.
 app.post('/createproject', async function(req, res) {
    console.log("In create project controller :");
    var result=await projectService.addProject(req.body,res);
    console.log("Result :"+result);
    if(result){
      res.setHeader('Content-Type', 'application/json')
      return res.status(200).json('Saved data');
    }else{
       return res.sendStatus(500);
    }
  });

}
