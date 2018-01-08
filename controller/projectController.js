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

  app.get('/projects/:categoryname',async function(req,res){
      var categoryname=req.params.categoryname;
      console.log("Category Name : "+categoryname);
      var result=await projectService.getProjectsByCategory(categoryname);
      console.log('result :'+result);
      if(result.constructor===Array){
          res.setHeader('Content-Type', 'application/json')
          return res.status(200).json(result);
      }else{
          return res.sendStatus(500);
      }
  });

}
