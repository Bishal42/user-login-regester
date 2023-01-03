import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Index from "./src/screens/Index";
import Rigester from "./src/screens/Rigester";
import Welcome from "./src/screens/Welcome";

const navigator = createStackNavigator(
  {
    login: Index,
    Rigester: Rigester,
    Welcome: Welcome,
  },
  {
    initialRouteName: "login",
    defaultNavigationOptions: {
      title: "",
    },
  }
);
export default createAppContainer(navigator);
