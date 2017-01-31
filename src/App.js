import React from 'react'
import { BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import AppNavigator from './AppNavigator'

class AppWithNavigationState extends React.Component {
  componentDidMount() {
    BackAndroid.addEventListener('backPress', () => {
      const {
        dispatch,
        nav,
      } = this.props
      let childNav = nav.routes[nav.index]
      // FIXME better condition
      if (childNav.routeName === 'FacebookAuthentication' || (childNav.routes && childNav.routes[childNav.index].routeName === 'Recent')) {
        return false
      }
      dispatch({ type: 'Back' })
      return true
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