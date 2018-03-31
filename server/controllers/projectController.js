const mongoose = require('mongoose');

const Project = mongoose.model('project');

exports.projects = async (req, res) => {
  try {
    const projects = await Project.find({ name: { $exists: true } }).exec();
    if (req.query.search) {
      const searchString = req.query.search.toLowerCase();
      const matchingProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchString)
        || project.description.toLowerCase().includes(searchString));
      res.status(200).json(matchingProjects);
    } else if (req.query.category) {
      const projectsByCategory = await Project.find({ category: { $exists: true } }).exec();
      const categoryString = req.query.category.toLowerCase();
      const matchingProjects = projectsByCategory.filter(project =>
        project.category.toLowerCase() === categoryString);
      res.status(200).json(matchingProjects);
    } else {
      res.status(200).json(projects);
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.createProject = async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    contact_detail: {
      contact_type: req.body.contact_type,
      contact_info: req.body.contact_info,
      contact_name: req.body.contact_name
    },
    location: {
      country: req.body.country,
      city: req.body.city
    },
    created_at: Date.now(),
    updated_at: Date.now()
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.readProject = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id }).exec();
    res.status(200).json(project);
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }, { new: true }
    ).exec();
    res.status(200).json(project);
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findOneAndRemove({ _id: req.params.id }).exec();
    res.status(200).send();
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.searchResults = async (req, res) => {
  try {
    const q = {}; // declare the query object
    q.$or = [];
    if ((req.query.search !== undefined) && ((req.query.search).length > 0)) {
      const searchString = req.query.search;
      const searchQuery = {}; // declare the query object
      searchQuery.$or = [];
      console.log(searchString);
      const regexpr = new RegExp(`(${searchString})`, 'gi');
      searchQuery.$or.push({ name: { $regex: regexpr } });
      searchQuery.$or.push({ description: { $regex: regexpr } });
      q.$or.push(searchQuery); // add to the query object
    }
    if ((req.query.category !== undefined) && ((req.query.category).length > 0)) {
      const searchCategory = { category: req.query.category };
      q.$or.push(searchCategory);
      console.log(searchCategory);
    }
    if ((req.query.location !== undefined) && ((req.query.location).length > 0)) {
      const searchlocation = req.query.location;
      const QueryLoc = {}; // declare the query object
      QueryLoc.$or = [];
      console.log(searchlocation);
      QueryLoc.$or.push({ 'location.country': searchlocation });
      QueryLoc.$or.push({ 'location.city': searchlocation });
      q.$or.push(QueryLoc); // add to the query object
    }
    //    if (req.query.skills !== '') {
    //      const skillsSelected = req.query.skills.map(skill => skill.toLowerCase());
    //      const matchingProjects = projectsBySkills.filter(project =>
    //        project.skills.some(skill =>
    //          skillsSelected.indexOf(skill.toLowerCase()) >= 0));
    //    }
    if ((req.query.skills !== undefined) && ((req.query.skills).length > 0)) {
      let skillsSelected = req.query.skills;
      if (!Array.isArray(skillsSelected)) { skillsSelected = new Array(skillsSelected); }

      const array = [];
      console.log(skillsSelected);
      for (let i = 0; i < skillsSelected.length; i += 1) {
        const e = skillsSelected[i];
        array.push(e);
      }
      const QuerySkills = { skills: { $in: array } };

      console.log(QuerySkills);
      q.$or.push(QuerySkills);
    }


    const projects = await Project.find(q);
    res.status(200).json(projects);
  } catch (err) {
    res.status(404).send(err);
  }
};
