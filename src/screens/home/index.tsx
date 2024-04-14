import { useState } from "react";
import type { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

import DrinkItem from "../../components/DrinkItem";

import type { IStackParams } from "../../../Routes";
import SearchBar from "../../components/SearchBar";
import { searchCocktail } from "../../services/api";

interface IProps {
  navigation: StackNavigationProp<IStackParams, 'Home'>;
}

export default function HomeScreen({ navigation }: IProps) {
  const [query, setQuery] = useState('');

  const { isLoading, isFetching, isError, data, error } = useQuery({
    queryKey: ['drinks', query],
    queryFn: () => searchCocktail(query!),
    placeholderData: keepPreviousData,
    gcTime: 60 * 60 * 1000,
    staleTime: Infinity
  });

  return (
    <View className="flex flex-1 p-1 mx-2">
      {/* <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('About')}
        mode="contained"
        className="mt-5 bg-blue-500 w-1/2"
      >
        Go to About
      </Button> */}
      <View className="mt-2">
        <SearchBar
          onSearch={(value) => setQuery(value)}
        />
      </View>
      <View className="h-2"></View>
      {(isLoading || isFetching) ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>{error.message}</Text>
      ) : data ? (
        <ScrollView>
          {data.map((drink) => (
            <DrinkItem
              key={drink.idDrink}
              data={drink}
              navigate={() => navigation.navigate('Detail', { id: drink.idDrink })}
            />
          ))}
        </ScrollView>
      ): (
        <Text>No data</Text>
      )}
    </View>
  )
}
