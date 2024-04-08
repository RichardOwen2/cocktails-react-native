import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Snackbar } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Routes from "./Routes";
import TanStackProvider from "./src/providers/TanStackProvider";

export default function App() {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <TanStackProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
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
