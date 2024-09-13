
import React from 'react';
import { View, TextInput,TextInputProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface SearchProps extends TextInputProps {}

const Search: React.FC<SearchProps> = (props) => {
    
  return (
    
    <View className="mx-3  flex flex-row items-center px-3
      py-2 my-2 bg-white border border-gray-200 rounded-full shadow-sm">

      <Feather name="search" size={24} color="#64748b" />
    <TextInput
        placeholder="Procure sua Comida..."
        // className="flex-1 ml-2 text-base text-gray-700"
        className='w-full h-full ml-2 flex-1 bg-transparent'
        {...props} 
      />
    </View>
    
  );
};

export default Search;





