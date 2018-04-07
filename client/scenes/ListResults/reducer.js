import actionTypes from './actionTypes';

const initialState = {
  results: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      return { ...state, isLoading: true };
    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload
      };
    default:
      return state;
  }
};
