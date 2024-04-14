import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Snackbar } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Routes from "./Routes";
import TanStackProvider from "./src/providers/TanStackProvider";

import 'react-native-gesture-handler';

export default function App() {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <TanStackProvider>
          <View className="flex flex-1 bg-green-800">
            <NavigationContainer
              theme={{
                dark: true,
                colors: {
                  primary: '#fff',
                  background: '#3F0300',
                  card: '#3F0300',
                  text: '#fff',
                  border: '#3F0300',
                  notification: '#3F0300',
                }
              }}
            >
              <Routes />
            </NavigationContainer>
          </View>
        </TanStackProvider>

        {/* <Snackbar
          style={{ backgroundColor: state?.bgColor }}
          visible={state?.show}
          onDismiss={hideSnackbar}
          action={{
            label: "Close",
            onPress: () => {
              hideSnackbar();
            }
          }}
          duration={5000}
        >
          {state.message}
        </Snackbar> */}
        <StatusBar style="light" backgroundColor="#3F0300" />
      </SafeAreaProvider>
    </SafeAreaView>
  );
}
