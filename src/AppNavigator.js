import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation'

import {
  AllButchersScreen,
  RecentButcheriesScreen,
  ButcheryScreen,
  LogoutScreen,
  FacebookAuthScreen,
  EmailAuthScreen,
} from './Components'

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentButcheriesScreen },
  All: { screen: AllButchersScreen },
  Logout: { screen: LogoutScreen },
}, {
  initialTab: 'Recent',
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  navigationOptions: { // default
    title: 'My Butcheries',
    header: {
      style: {
        elevation: 0,
        backgroundColor: 'green',
      },
      visible: true,
    },
    tabBar: {
      style: {
        elevation: 0,
        backgroundColor: 'red',
      },
    }
  },
})

const AppNavigator = StackNavigator({
  FacebookAuthentication: { screen: FacebookAuthScreen },
  EmailAuthentication: { screen: EmailAuthScreen },
  Home: { screen: MainScreenNavigator },
  Butchery: { screen: ButcheryScreen },
}, {
  headerMode: 'screen', // float or screen or none
  initialRouteName: 'FacebookAuthentication',
  navigationOptions: {
    header: {
      visible: false,
    },
  },
})

export const backAndroidHandler = (dispatch, nav) => {
  if (shouldCloseApp(nav)) return false
  dispatch({ type: 'Back' })
  return true
}

const shouldCloseApp = nav => (
  isAuthenticationInitialScreen(nav)
  || isHomeInitialScreen(nav)
)

const isAuthenticationInitialScreen = nav => (
  nav.routes[nav.index].routeName === 'FacebookAuthentication'
)

const isHomeInitialScreen = nav => {
  let childNav = nav.routes[nav.index]
  return (childNav.routes && childNav.routes[childNav.index].routeName === 'Recent')
}

export default AppNavigator