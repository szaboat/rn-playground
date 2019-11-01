import React from 'react';
import CircularProgressScreen from './screens/circularProgress';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ChatInputScreen from "./screens/chatInputScreen";
import RichInputScreen from "./screens/richInputScreen";

const MyDrawerNavigator = createDrawerNavigator({
  CircularProgressScreen: {
    screen: CircularProgressScreen,
  },
  ChatInputScreen: {
    screen: ChatInputScreen,
  },
  RichInputScreen: {
    screen: RichInputScreen,
  },
},
  {initialRouteName: "RichInputScreen"});

const App = createAppContainer(MyDrawerNavigator);

export default App;