import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ShuffleScreen from '../screens/ShuffleScreen';
import OrderScreen from '../screens/OrderScreen';
import OtherScreen from '../screens/OtherScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const ShuffleStack = createStackNavigator(
    {
        Settings: ShuffleScreen,
    },
    config
);

ShuffleStack.navigationOptions = {
    tabBarLabel: 'Shuffle',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
};

ShuffleStack.path = '';

const OrderStack = createStackNavigator(
    {
        Settings: OrderScreen,
    },
    config
);

OrderStack.navigationOptions = {
    tabBarLabel: 'Order',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
};

OrderStack.path = '';

const OtherStack = createStackNavigator(
    {
        Settings: OtherScreen,
    },
    config
);

OtherStack.navigationOptions = {
    tabBarLabel: 'Other',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
};

OtherStack.path = '';

const tabNavigator = createMaterialTopTabNavigator({
  // HomeStack,
  // LinksStack,
  // SettingsStack,
  ShuffleStack,
  OrderStack,
}, {
    style: { marginTop: 20 }
});

tabNavigator.path = '';

export default tabNavigator;
