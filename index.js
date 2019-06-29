/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import './src/config/ReactotronConfig';
import Navigator from './src/Navigator';
import { name as appName } from './app.json';
import storeConfig from './src/config/store';

const store = storeConfig();

const Redux = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
