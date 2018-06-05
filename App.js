/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class App extends PureComponent {
  render() {
    console.log('test log dddddddddddddddd');

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Ready ready
        </Text>
        <Text style={styles.instructions}>
          {JSON.stringify(this.props)}
        </Text>
      </View>
    );
  }
}
