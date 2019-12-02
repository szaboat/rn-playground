import CircularProgressScreen from "./screens/circularProgress";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import ChatInputScreen from "./screens/chatInputScreen";
import RichInputScreen from "./screens/richInputScreen";
import VerifyCodeScreen from "./screens/verifyCodeScreen";
import MaskedInputScreen from "./screens/maskedInputScreen";
import KeyboardAvoidingScreen from "./screens/keyboardAvoidingScreen";
import RadioButtonScreen from "./screens/radioButtonScreen";

const MyDrawerNavigator = createDrawerNavigator(
  {
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
    MaskedInputScreen: {
      screen: MaskedInputScreen,
    },
    KeyboardAvoidingScreen: {
      screen: KeyboardAvoidingScreen,
    },
    RadioButtonScreen: {
      screen: RadioButtonScreen,
    },
  },
  { initialRouteName: "RadioButtonScreen" },
);

const App = createAppContainer(MyDrawerNavigator);

export default App;
