import React from 'react';
import CircularProgressScreen from './screens/circularProgress';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ChatInputScreen from "./screens/chatInputScreen";

const MyDrawerNavigator = createDrawerNavigator({
  CircularProgressScreen: {
    screen: CircularProgressScreen,
  },
  ChatInputScreen: {
    screen: ChatInputScreen,
  },
},
  {initialRouteName: "ChatInputScreen"});

const App = createAppContainer(MyDrawerNavigator);

export default App;