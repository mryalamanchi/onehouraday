const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/project', projectController.projects)
router.post('/project', projectController.createProject);
router.get('/project/:id', projectController.readProject);
router.put('/project/:id', projectController.updateProject);
router.delete('/project/:id', projectController.deleteProject);

module.exports = router;