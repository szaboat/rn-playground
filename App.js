import CircularProgressScreen from "./screens/circularProgress";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import ChatInputScreen from "./screens/chatInputScreen";
import RichInputScreen from "./screens/richInputScreen";
import VerifyCodeScreen from "./screens/verifyCodeScreen";
import MaskedInputScreen from "./screens/maskedInputScreen";
import KeyboardAvoidingScreen from "./screens/keyboardAvoidingScreen";
import RadioButtonScreen from "./screens/radioButtonScreen";
import AutocompletePlacesScreen from "./screens/placesScreen";
import LayoutTestScreen from "./screens/layoutTestScreen";
import FixedFlatListTestScreen from "./screens/fixedFlatListTestScreen";
import FlatListTestScreen from "./screens/flatListTestScreen";
import SectionListTestScreen from "./screens/sectionListScreen";

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
    AutocompletePlacesScreen: {
      screen: AutocompletePlacesScreen,
    },
    LayoutTestScreen: {
      screen: LayoutTestScreen,
    },
    FixedFlatListTestScreen: {
      screen: FixedFlatListTestScreen,
    },
    SectionListTestScreen: {
      screen: SectionListTestScreen,
    },
    FlatListTestScreen: {
      screen: FlatListTestScreen,
    },
  },
  { initialRouteName: "SectionListTestScreen" },
);

const App = createAppContainer(MyDrawerNavigator);

export default App;
