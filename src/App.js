import React from 'react'
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import AppNavigator from './AppNavigator'

class AppWithNavigationState extends React.Component {
  render() {
    const {
      dispatch,
      nav,
    } = this.props

    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch,
        state: nav,
      })} />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)