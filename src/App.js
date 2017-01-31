import React from 'react'
import { BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import AppNavigator from './AppNavigator'

class AppWithNavigationState extends React.Component {
  componentDidMount() {
    const {
      dispatch,
      nav,
    } = this.props
    BackAndroid.addEventListener('backPress', () => {
      let childNav = nav.routes[nav.index]
      // FIXME better condition and add TAB support
      if (childNav.routes[childNav.index].routeName !== 'FacebookAuthentication') {
        dispatch({ type: 'Back' })
        return true
      }
      return false
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