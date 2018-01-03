var mongoose = require('mongoose')
var project = require('../model/project');

projectService={

    addProject(projectDetails,res){
        console.log("In add project :")
        var projectData=new project(projectDetails);
        projectData.created_at=Date.now();
        projectData.updated_at=Date.now();

        console.log("Project Data :"+JSON.stringify(projectData));
        return new Promise (function(resolve){
            projectData.save((error) => {
                if (error) {
                    console.log("ERror in project service :");
                    console.log(error);
                    resolve(false);
                }
                console.log("success");
                resolve(true);
            });
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
