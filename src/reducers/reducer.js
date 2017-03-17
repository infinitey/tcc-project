import { combineReducers } from 'redux'

//import all the reducers here
//e.g. import user from './userReducer'

//import all the nav reducers here
import mainNavState from './mainNavReducer'

export default combineReducers({
  mainNavState,
})
