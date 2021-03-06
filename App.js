import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import Config from './src/config/axios';

const instructions = Platform.select({
  ios: 'Texto alternativo para iOS',
  android: 'Texto alternativo para android',
});

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

export default class App extends Component {
  componentDidMount() {
    console.warn('Teste environment', Config.api);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!!!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
