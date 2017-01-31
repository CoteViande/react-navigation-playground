const middleware = store => next => action => {
  let dispatch = store.dispatch
  let prevState = store.getState()
  let result = next(action)
  let nextState = store.getState()

  if (prevState.isAuthenticated !== nextState.isAuthenticated) {
    const nextScreen = nextState.isAuthenticated
      ? 'Home'
      : 'FacebookAuthentication'
    dispatch({
      type: 'Reset',
      index: 0,
      actions: [{
        type: 'Navigate',
        routeName: nextScreen,
      }],
    })
  }
  return result
}

export default middleware