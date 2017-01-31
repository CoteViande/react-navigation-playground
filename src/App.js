import React from 'react'
import { BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import AppNavigator, { backAndroidHandler } from './AppNavigator'

class AppWithNavigationState extends React.Component {
  componentDidMount() {
    BackAndroid.addEventListener('backPress', () => {
      const { dispatch, nav } = this.props
      return backAndroidHandler(dispatch, nav)
    })
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('backPress')
  }

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