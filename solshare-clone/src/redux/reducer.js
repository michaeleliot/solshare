import { combineReducers } from 'redux';
import locations from './reducers/locations';
import authUser from './reducers/authUser';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  locations,
  authUser,
  common,
  router: routerReducer
});
