import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { composeWithDevTools } from 'remote-redux-devtools'

import reducer from './reducer'

const configureStore = initialState => {
  const middlewares = []

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares),
      autoRehydrate(),
    ),
  )

  const persistConfig = {
    blacklist: [],
    storage: AsyncStorage,
  }
  persistStore(store, persistConfig)
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