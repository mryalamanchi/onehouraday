import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import homeReducer from './scenes/Home/reducer';
import listResultsReducer from './scenes/ListResults/reducer';
/* eslint no-underscore-dangle: 0 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  Home: homeReducer,
  ListResults: listResultsReducer
});

export default createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
