import React from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import {
  signIn,
  signOut,
} from './actions'

export class ButcheryScreen extends React.Component {
  static navigationOptions = {
    title: 'Add your meat name',
    header: ({ state, setParams }) => ({
      style: {
        elevation: 0,
        backgroundColor: 'red',
      },
    }),
  }

  render() {
    const {
      params
    } = this.props.navigation.state

    return (
      <View style={styles.container}>
        <Text>Chat with {params.user}</Text>
        <Button
          onPress={() => console.warn('coteviande done')}
          title="Je suis CôteViande"
        />
      </View>
    )
  }
}

export class RecentButcheriesScreen extends React.Component {
  static navigationOptions = {}

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {'CôteViande\'s navigation playground'}
        </Text>
      </View>
    )
  }
}

export class AllButchersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List of all butchers</Text>
      </View>
    )
  }
}

export class Logout extends React.Component {
  render() {
    const { signOut } = this.props
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Button
          onPress={signOut}
          title="Sign out of CôteViande"
        />
        <Text>
          or
        </Text>
        <Button
          onPress={() => navigate('Authenticate')}
          title="AUTH AGAIN"
        />
      </View>
    )
  }
}
export const LogoutScreen = connect(() => ({}), { signOut })(Logout)

class FacebookAuth extends React.Component {
  static navigationOptions = {
    title: 'Authenticate',
    header: {
      visible: false,
    },
  }

  render() {
    const { navigate } = this.props.navigation
    const { signIn } = this.props
    return (
      <View style={styles.container}>
        <Button
          onPress={signIn}
          title="Sign in with Facebook"
        />
        <Text>
          or
        </Text>
        <Button
          onPress={() => navigate('EmailAuthentication')}
          title="Sign in with Email"
        />
        <Text>
          or
        </Text>
        <Button
          onPress={() => navigate('Home')}
          title="Try to access Home"
        />
      </View>
    )
  }
}
export const FacebookAuthScreen = connect(() => ({}), { signIn })(FacebookAuth)

export class EmailAuth extends React.Component {
  static navigationOptions = {
    title: 'Authenticate',
    header: {
      visible: true,
      style: {
        elevation: 0,
        backgroundColor: 'pink',
      },
    }
  }

  render() {
    const { signIn } = this.props
    return (
      <View style={styles.container}>
        <Button
          onPress={signIn}
          title="Sign in with email"
        />
      </View>
    )
  }
}
export const EmailAuthScreen = connect(() => ({}), { signIn })(EmailAuth)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
})