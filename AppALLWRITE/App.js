import React, { Component } from 'react'
import { Button, View, Text } from 'react-native';
import {Provider } from 'react-redux'
import Store from './src/store/configureStore'

import Navigator from './src/navigator/Navigator'

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator/>
      </Provider>
    )
  }
}
