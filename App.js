import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Index from "./src/screens/Index";
import Rigester from "./src/screens/Rigester";

const navigator = createStackNavigator(
  {
    login: Index,
    Rigester: Rigester,
  },
  {
    initialRouteName: "login",
    defaultNavigationOptions: {
      title: "",
    },
  }
);
export default createAppContainer(navigator);
