import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { composeWithDevTools } from 'remote-redux-devtools'

import reducer from './reducer'
import middleware from './middleware'
import initialization from './initialization'

const configureStore = initialState => {
  const middlewares = [
    middleware,
  ]

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares),
      autoRehydrate(),
    ),
  )

  const persistConfig = {
    blacklist: ['isInitializationComplete'],
    storage: AsyncStorage,
  }
  persistStore(store, persistConfig, initialization(store))
  .purge()

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore