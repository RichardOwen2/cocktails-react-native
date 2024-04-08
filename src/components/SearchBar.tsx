import { FontAwesome } from '@expo/vector-icons';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import useInput from '../hooks/useInput';

const SearchBar: React.FC<{
  query: string;
  onQueryChange: (text: string) => void;
  onSearch: (query: string) => void;
}> = ({
  query,
  onQueryChange,
  onSearch
}) => {
    return (
      // <View className="flex-row items-center bg-white p-2 rounded border border-gray-300">
      //   <TextInput
      //     className="flex-1 p-2"
      //     placeholder="Search"
      //     value={query}
      //     onChangeText={onQueryChange}
      //   />
      //   <TouchableOpacity className="bg-blue-500 rounded p-2 ml-2" onPress={() => onSearch(query!)}>
      //     <Text className="text-white">Search</Text>
      //   </TouchableOpacity>
      // </View>

      <View className="px-2 w-full">
        <View className="bg-rose-900 rounded-xl px-4 py-2 flex-row items-center">
          <TouchableOpacity onPress={() => onSearch(query!)}>
            <FontAwesome name="search" size={20} color="#CEC3CD" />
          </TouchableOpacity>
          <TextInput
            className="flex-1 p-1 ml-2 text-[#CEC3CD]"
            value={query}
            onChangeText={onQueryChange}
            placeholder="Search"
            placeholderTextColor="#CEC3CD"
            onSubmitEditing={() => onSearch(query!)}
          />
          {/* <TouchableOpacity className="bg-blue-500 rounded p-2 ml-2" onPress={() => onSearch(query!)}>
            <Text className="text-white">Search</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };

export default SearchBar;
