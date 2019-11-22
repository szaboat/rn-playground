import React from 'react';
import CircularProgressScreen from './screens/circularProgress';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ChatInputScreen from "./screens/chatInputScreen";
import RichInputScreen from "./screens/richInputScreen";
import VerifyCodeScreen from "./screens/verifyCodeScreen";

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
  VerifyCodeScreen: {
    screen: VerifyCodeScreen,
  },
},
  {initialRouteName: "VerifyCodeScreen"});

const App = createAppContainer(MyDrawerNavigator);

export default App;