import actionTypes from './actionTypes';

const initialState = {
  searchValue: '',
  searchTabIndex: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_DATA:
      return {
        ...state,
        searchValue: action.payload.searchValue,
        searchTabIndex: action.payload.searchTabIndex
      };
    default:
      return state;
  }
};
