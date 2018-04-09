const mongoose = require('mongoose');

const Project = mongoose.model('project');


const searchByLocation = async (res, location) => {
  const projectsByLocation = await Project.find({
    location: { $exists: true }
  }).exec();
  const searchLocation = location.toLowerCase();
  const matchingProjects = projectsByLocation.filter(project =>
    (project.location.country !== undefined &&
     project.location.country.toLowerCase().includes(searchLocation)) ||
    (project.location.city !== undefined &&
     project.location.city.toLowerCase().includes(searchLocation)));
  return res.status(200).json(matchingProjects);
};
const searchByCategory = async (res, category) => {
  const projectsByCategory = await Project.find({ category: { $exists: true } }).exec();
  const categoryString = category.toLowerCase();
  const matchingProjects = projectsByCategory.filter(project =>
    project.category.toLowerCase() === categoryString);
  return res.status(200).json(matchingProjects);
};
const searchBySkills = async (res, skills) => {
  const projectsBySkills = await Project.find({ skills: { $exists: true } }).exec();
  const skillsSelected = skills.map(skill => skill.toLowerCase()); /* skills array */
  const matchingProjects = projectsBySkills.filter(project =>
    project.skills.some(skill =>
      skillsSelected.indexOf(skill.toLowerCase()) >= 0));
  /* checks if atleast one skill selected is in the current project */
  return res.status(200).json(matchingProjects);
};

const searchByProject = async (res, search) => {
  const projects = await Project.find({ name: { $exists: true } }).exec();
  const searchString = search.toLowerCase();
  const matchingProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchString)
    || project.description.toLowerCase().includes(searchString));
  return res.status(200).json(matchingProjects);
};

exports.projects = async (req, res) => {
  try {
    const { search, category } = req.query;
    if (search) {
      return await searchByProject(res, search);
    } else if (category) {
      return await searchByCategory(res, category);
    }
    const projects = await Project.find({ name: { $exists: true } }).exec();
    return res.status(200).json(projects);
  } catch (err) {
    return res.status(404).send(err);
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
    const { location, category, skills } = req.query;
    const projects = await Project.find().exec();
    if (location) { /* SearchFilter Location set */
      return await searchByLocation(res, location);
    } else if (category) { /* SearchFilter Category set */
      return await searchByCategory(res, category);
    } else if (skills) { /* Volunteer would like to search projects by skills */
      return await searchBySkills(res, skills);
    }
    return res.status(200).json(projects);
  } catch (err) {
    res.status(404).send(err);
  }
};
