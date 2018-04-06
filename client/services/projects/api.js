import axios from 'axios';

const searchProjects = async (searchValue) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/project?search=${searchValue}`);
    return res;
  } catch (ex) {
    throw ex;
  }
};
export default {
  searchProjects
};

