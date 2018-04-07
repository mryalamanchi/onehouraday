import projectsApi from '../../services/projects/api';
import actionTypes from './actionTypes';

const searchProjects = searchValue => async (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_START });
  try {
    const result = await projectsApi.searchProjects(searchValue);
    dispatch({ type: actionTypes.SEARCH_SUCCESS, payload: result.data });
  } catch (ex) {
    dispatch({ type: actionTypes.SEARCH_FAIL, error: true, payload: ex });
  }
};

export default {
  searchProjects
};
