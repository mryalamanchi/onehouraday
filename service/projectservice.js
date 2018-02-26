const Project = require('../model/project');

const projectService = {

  addProject(projectDetails) {
    const projectData = new Project(projectDetails);
    projectData.created_at = Date.now();
    projectData.updated_at = Date.now();

    console.log('Project Data :', JSON.stringify(projectData));
    return new Promise((resolve) => {
      projectData.save((error) => {
        if (error) {
          console.error('Error in project service :', error);
          resolve(false);
        }
        resolve(projectData);
      });
    });
  },

  getProjectById() {

  },

  getAllProjects() {

  },

  deleteProject() {

  },

  getProjectsByCategory(categoryName) {
    const criteria = {};
    criteria.category = categoryName;
    return new Promise((resolve) => {
      Project.find(criteria, (error, projects) => {
        if (error) {
          console.error('error');
          resolve(false);
        }
        console.log('success. projects :', projects);
        resolve(projects);
      });
    });
  },
};

module.exports = projectService;
