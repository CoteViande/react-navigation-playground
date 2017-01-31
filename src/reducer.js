import { combineReducers } from 'redux'

import AppNavigator from './AppNavigator'

// AppNavigator.router = {
//   ...AppNavigator.router,
//   getStateForAction(action, state) {
//     if (!hasAccessToScreen(state, action.routeName)) {
//       console.log('has access: ', !hasAccessToScreen, 'route name: ', action.routeName, 'state: ', state, 'action: ', action)
//       return null
//     }
//     return AppNavigator.router.getStateForAction(action, state);
//   },
// }

const hasAccessToScreen = (state, requestedRoute) => {
  if (true || !state.isAuthenticated) {
    const unauthenticatedRoutes = [
      'FacebookAuthentication',
      'EmailAuthentication',
    ]
    const isResuestedRouteInSet = unauthenticatedRoutes.includes(requestedRoute)
    return isResuestedRouteInSet
  }
  return true
}

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

const initializationReducer = (state = false, action) => {
  switch (action.type) {
    case 'INITIALIZATION_COMPLETE':
      return true
    default:
      return state
  }
}

const reducer = combineReducers({
  nav: (state, action) => {
    // if (action.type === 'Navigate' && !hasAccessToScreen(state, action.routeName)) {
    //   return state
    // }
    return AppNavigator.router.getStateForAction(action, state)
  },
  isAuthenticated: authenticationReducer,
  isInitializationComplete: initializationReducer,
})

export default reducer