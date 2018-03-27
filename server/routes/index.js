const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/project', projectController.projects);
router.post('/project', projectController.createProject);
router.get('/project/:id', projectController.readProject);
router.put('/project/:id', projectController.updateProject);
router.delete('/project/:id', projectController.deleteProject);
router.get('/searchResults', projectController.searchResults);
module.exports = router;
