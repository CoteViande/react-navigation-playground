import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import AppWithNavigationState from './src/App'
import configureStore from './src/configureStore'

const store = configureStore()

class RNNavigationPlayground extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('rnNavigationPlayground', () => RNNavigationPlayground)