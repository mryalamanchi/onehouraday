import actionTypes from './actionTypes';

const setSearchData = (searchValue, searchTabIndex) => ({
  type: actionTypes.SET_SEARCH_DATA,
  payload: {
    searchValue,
    searchTabIndex
  }
});

export default {
  setSearchData
};
