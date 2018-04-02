import { combineReducers } from 'redux';

import searchReducer from './components/Search/reducer';

const reducer = combineReducers({
  search: searchReducer
});
export default reducer;
