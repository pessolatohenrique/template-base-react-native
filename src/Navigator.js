/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import commonStyle from './utils/commonStyle';
import Home from './containers/example/Home';
import Register from './containers/form/Register';
import ListExample from './containers/exampleRealm/ListExample';
import CustomHeader from './components/CustomHeader';

/**
 * cada página pode ter subpáginas.
 * por exemplo: um produto pode ter uma listagem, formulário, edição, etc
 * por este motivo, a divisão com stackNavigator e bottomTabs
 */
const HomeStack = createStackNavigator({
  Home: {
    screen: () => <Home title="Dashboard card" />,
    navigationOptions: {
      title: 'Dashboard',
      headerTintColor: '#fff',
      headerStyle: commonStyle.header,
    },
  },
  // Details: DetailsScreen,
});

const RegisterStack = createStackNavigator({
  Home: {
    screen: () => <Register />,
    navigationOptions: {
      title: 'Register',
      headerTintColor: '#fff',
      headerStyle: commonStyle.header,
    },
  },
  // Details: DetailsScreen,
});

const ListStack = createStackNavigator({
  Home: {
    screen: ({ navigation }) => <ListExample navigation={navigation} />,
    navigationOptions: ({ navigation }) => ({
      title: 'List',
      headerTitle: <CustomHeader title="List" navigation={navigation} />,
      headerTintColor: '#fff',
      headerStyle: commonStyle.header,
    }),
  },
  // Details: DetailsScreen,
});

const MenuRoutes = {
  Dashboard: {
    name: 'Dashboard',
    screen: HomeStack,
    navigationOptions: {
      title: 'Dashboard',
      header: { visible: true },
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />,
    },
  },
  Add: {
    name: 'Tab2',
    screen: RegisterStack,
    navigationOptions: {
      title: 'Register',
      tabBarIcon: ({ tintColor }) => <Icon name="user" size={30} color={tintColor} />,
    },
  },
  List: {
    name: 'Tab3',
    screen: ListStack,
    navigationOptions: {
      title: 'List',
      // headerTitle: <CustomHeader />,
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={30} color={tintColor} />,
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
