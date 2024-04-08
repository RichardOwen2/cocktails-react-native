import type { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import DrinkItem from "../../components/DrinkItem";

import type { IStackParams } from "../../../Routes";
import SearchBar from "../../components/SearchBar";
import useInput from "../../hooks/useInput";
import { searchCocktail } from "../../services/api";

interface IProps {
  navigation: StackNavigationProp<IStackParams, 'Home'>;
}

export default function HomeScreen({ navigation }: IProps) {
  const [query, onQueryChange] = useInput('');

  const { isLoading, isFetching, isError, data, error } = useQuery({
    queryKey: ['drinks', query],
    queryFn: () => searchCocktail(query!),
    placeholderData: keepPreviousData,
    gcTime: 60 * 60 * 1000,
    staleTime: Infinity
  })

  return (
    <View className="flex flex-1 p-1">
      {/* <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('About')}
        mode="contained"
        className="mt-5 bg-blue-500 w-1/2"
      >
        Go to About
      </Button> */}
      <SearchBar
        query={query!}
        onQueryChange={onQueryChange}
        onSearch={() => { }}
      />
      <ScrollView>
        <DrinkItem
          data={{
            idDrink: '1',
            strDrink: 'Mojito',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg',
            strCategory: 'Cocktail',
            strAlcoholic: 'Alcoholic',
            strInstructions: 'Mix all ingredients in a shaker with ice. Shake well and strain into large glass filled with'
          }}
          navigate={() => { }}
        />
      </ScrollView>
    </View>
  )
}
