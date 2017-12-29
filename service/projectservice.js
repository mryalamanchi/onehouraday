var mongoose = require('mongoose')
var project = require('../model/project');

projectService={

    addProject(projectDetails,res){
        console.log("In add project :")
        var projectData=new project(projectDetails);
        projectData.created_at=Date.now();
        projectData.updated_at=Date.now();

        console.log("Project Data :"+JSON.stringify(projectData));
        projectData.save((error, savedProject) => {
            if (error) {
                console.log("ERror in project service :");
                console.log(error);
                return res.sendStatus(500);
            }
            console.log("success");
            res.setHeader('Content-Type', 'application/json')
            return res.status(200).json('Saved data');
        });

    },

    getProjectById(){

    },

    getAllProjects(){

    },

    deleteProject(){

    }

}
module.exports=projectService
