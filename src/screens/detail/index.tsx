import { StackNavigationProp } from "@react-navigation/stack";
import { IStackParams } from "../../../Routes";
import { RouteProp } from "@react-navigation/native";
import { Text } from "react-native-paper";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getDrinkById } from "../../services/api";
import { Image, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { extractIngredients } from "../../utils";

interface IProps {
  navigation: StackNavigationProp<IStackParams, 'Detail'>;
  route: RouteProp<IStackParams, 'Detail'>;
}

export default function DetailScreen({ 
  navigation,
  route
}: IProps) {
  const { id } = route.params;

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['drink detail', id],
    queryFn: () => getDrinkById(id),
    placeholderData: keepPreviousData,
    gcTime: 60 * 60 * 1000,
    staleTime: Infinity
  });

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>{error.message}</Text>
  }

  return (
    <View className="flex flex-1 mx-2">
      <ScrollView className="p-4">
        <Image
          source={{ uri: data!.strDrinkThumb }}
          className="w-full h-48 rounded-md"
          resizeMode="cover"
        />
        <View className="mt-4">
          <Text className="text-2xl font-bold text-[#FFDAD4] mb-1">
            {data!.strDrink}
          </Text>
          <Text className="text-base text-[#FFDAD4]">
            {`${data!.strCategory} (${data!.strAlcoholic})`}
          </Text>
          <Text className="text-lg font-bold text-[#FFDAD4] mt-4 mb-1">
            Ingredients
          </Text>
          {extractIngredients(data!).map((ingredient, index) => (
            <Text key={index} className="text-base text-[#FFDAD4]">
              {ingredient}
            </Text>
          ))}
          <Text className="text-lg font-bold text-[#FFDAD4] mt-4 mb-1">
            Instructions
          </Text>
          <Text className="text-base text-[#FFDAD4]">
            {data!.strInstructions}
          </Text>
        </View>
      </ScrollView>
      {/* <TouchableOpacity
        style={"absolute bottom-0 right-0 m-4 bg-blue-500 p-3 rounded-full"}
        onPress={toggleFavorite} // Assuming toggleFavorite function is defined
      >
        <FontAwesome
          name={isFavorite ? 'heart' : 'heart-o'}
          size={24}
          color="white"
        />
      </TouchableOpacity> */}
    </View>
  );
}
