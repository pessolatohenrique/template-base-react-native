/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './containers/example/Home';

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
// });

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
//   Details: DetailsScreen,
// });

// export default createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Settings: SettingsStack,
//   },
//   {
//     /* Other configuration remains unchanged */
//   }

/**
 * cada página pode ter subpáginas.
 * por exemplo: um produto pode ter uma listagem, formulário, edição, etc
 * por este motivo, a divisão com stackNavigator e bottomTabs
 */
const HomeStack = createStackNavigator({
  Home: () => <Home title="Dashboard" />,
});

// const HomeStack = createStackNavigator({
//   Dashboard: {
//     name: 'Dashboard',
//     screen: () => <Home title="Dashboard" />,
//     navigationOptions: {
//       title: 'Dashboard',
//       header: { visible: true },
//       // tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />,
//     },
//   },
// });

const MenuRoutes = {
  Dashboard: HomeStack,
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
