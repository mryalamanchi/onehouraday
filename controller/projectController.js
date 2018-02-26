const projectService = require('../service/projectservice');

const createProject = async function (req, res) {
  const result = await projectService.addProject(req.body, res);
  console.log('Result :', result);
  if (result) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(`Project created: ${result.name}`);
  } else {
    res.sendStatus(500);
  }
};

const getByCategoryName = async function (req, res) {
  const categoryName = req.params.category_name;
  const result = await projectService.getProjectsByCategory(categoryName);
  console.log('result :', result);
  if (result.constructor === Array) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } else {
    res.sendStatus(500);
  }
};

module.exports.controller = function (app) {
  app.get('/projects/:category_name', getByCategoryName);
  app.post('/createproject', createProject);
};
