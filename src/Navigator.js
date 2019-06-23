/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './containers/example/Home';

const MenuRoutes = {
  Dashboard: {
    name: 'Dashboard',
    screen: () => <Home title="Dashboard" />,
    navigationOptions: {
      title: 'Dashboard',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />,
    },
  },
  Add: {
    name: 'Tab2',
    screen: () => <Home title="Aba 02" />,
    navigationOptions: {
      title: 'Aba 02',
      tabBarIcon: ({ tintColor }) => <Icon name="camera" size={30} color={tintColor} />,
    },
  },
  Profile: {
    name: 'Tab3',
    screen: () => <Home title="Aba 03" />,
    navigationOptions: {
      title: 'Aba 03',
      tabBarIcon: ({ tintColor: color }) => <Icon name="user" size={30} color={color} />,
    },
  },
};

const MenuConfig = {
  initialRouteName: 'Dashboard',
  tabBarOptions: {
    showLabel: true,
  },
};

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

export default MenuNavigator;
