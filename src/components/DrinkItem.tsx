import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IDrink } from '../models/response';

const DrinkItem: React.FC<{
  data: IDrink;
  navigate: (id: string) => void;
}> = ({
  data,
  navigate
}) => {
    return (
      <View className="w-full">
        <TouchableOpacity
          className="my-1 p-2 bg-[#900827] rounded-xl shadow-md"
          onPress={() => navigate(data.idDrink)}
        >
          <View className="flex-row items-center">
            <Image
              source={{ uri: data.strDrinkThumb }}
              className="w-24 h-24 rounded-lg"
            />
            <View className="flex-1 p-2 ml-2">
              <Text className="text-lg font-semibold text-white">{data.strDrink}</Text>
              <Text className="text-base font-normal text-white">{data.strCategory}</Text>
              <Text className="text-sm font-light italic text-white">{data.strAlcoholic}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

// export const DrinkItemLoading = () => {
//   return (
    
//   )
// }

export default DrinkItem;
