import type { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

import type { IStackParams } from "../../../Routes";

interface IProps {
  navigation: StackNavigationProp<IStackParams, 'About'>;
}

export default function AboutScreen({ navigation }: IProps) {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text>About Screen</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        mode="contained"
        className="mt-5 bg-blue-500 w-1/2"
      >
        Go to About
      </Button>
    </View>
  )
}
