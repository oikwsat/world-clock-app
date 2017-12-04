import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import AddScreen from './AddScreen.js';
import SettingScreen from './SettingScreen.js';

const Navigator = StackNavigator({
  Home:    { screen: HomeScreen    },
  Add:     { screen: AddScreen     },
  Setting: { screen: SettingScreen },
});

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}
