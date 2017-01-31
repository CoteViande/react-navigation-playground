import { initializationComplete } from './actions'

const initialization = store => () => {
  const state = store.getState()
  const dispatch = store.dispatch

  initialCheckUp: try {
    console.log('INITIALIZATION...')
  } catch (error) {
    console.log('intializing.js // error happened: ', error)
  }
  dispatch(initializationComplete())
}

export default initialization