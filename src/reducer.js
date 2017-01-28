import { combineReducers } from 'redux'

import AppNavigator from './AppNavigator'

// AppNavigator.router = {
//   ...AppNavigator.router,
//   getStateForAction(action, state) {
//     if (state) {
//       console.log('ACTION: ', action, 'STATE: ', state)
//     }
//     return AppNavigator.router.getStateForAction(action, state);
//   },
// }

const authenticationReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return true
    case 'SIGN_OUT':
      return false
    default:
      return state
  }
}

const reducer = combineReducers({
  nav: (state, action) => (
    AppNavigator.router.getStateForAction(action, state)
  ),
  authentication: authenticationReducer,
})

export default reducer