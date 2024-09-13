


import React,{useState, useEffect} from 'react';
import { View,Text,Pressable,Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { RestaurantsProps } from '..';


interface RestaurantItemProps {
    item: RestaurantsProps;
  }


const RestaurantItem: React.FC<RestaurantItemProps> = ({item}) => {
 
 return (
<Pressable className='flex flex-row items-center justify-start gap-2'>
    <Image
    source={{uri: item.image}}
    className='w-20 h-20 rounded-full'
  />
  <View className='flex gap-2'>
    <Text className='text-base text-black leading-4 font-bold'
    numberOfLines={2}>{item.name}</Text>

    <View className='flex-row items-center gap-1'>
     <Feather name='star' size={14} color="#ca8a04"/>
     <Text className='text-sm'>4.5</Text>
    </View>

  </View>
</Pressable>
  );
}

export default RestaurantItem;