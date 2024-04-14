import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./src/screens/home";
import AboutScreen from "./src/screens/about";
import DetailScreen from "./src/screens/detail";

export type IHomeParams = {
  Home: undefined;
  Detail: { id: string };
}

export type IStackParams = IHomeParams;

export type IDrawerParams = {
  Home: undefined;
  About: undefined;
}

const Stack = createStackNavigator<IStackParams>();
const Drawer = createDrawerNavigator<IDrawerParams>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const Routes = () => {
  return (
    <Drawer.Navigator screenOptions={{
      // headerShown: false,
      // cardStyle: {
      //   backgroundColor: '#3F0300',
      // },
    }} initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}

export default Routes
