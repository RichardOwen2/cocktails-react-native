import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/home";
import AboutScreen from "./src/screens/about";

export type IStackParams = {
  Home: undefined;
  About: undefined;
}

const Stack = createStackNavigator<IStackParams>();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#3F0300',
      },
    }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default Routes