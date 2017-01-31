const middleware = store => next => action => {
  let dispatch = store.dispatch
  let prevState = store.getState()
  let result = next(action)
  let nextState = store.getState()

  if (prevState.isAuthenticated !== nextState.isAuthenticated) {
    const nextScreen = nextState.isAuthenticated
      ? 'Home'
      : 'Authenticate'
    dispatch({
      type: 'Navigate',
      routeName: nextScreen,
      action: {
        type: 'Reset',
        index: 0,
        action: {
          type: 'Navigate',
          routeName: 'Main'
        }
      },
    })
  }
  return result
}

export default middleware