

import React,{useState, useEffect} from 'react';
import { View,Text,Pressable,Image } from 'react-native';
import RestaurantItem from './item'

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string
}

const RestaurantsVesticalList: React.FC = () => {
  const [restaurants,setRestaurants] = useState<RestaurantsProps[]>([]);

    useEffect(() => {
        async function getFoods(){
         const response = await fetch('http://192.168.1.42:3000/restaurants')
         const data = await response.json()
         setRestaurants(data)
        }
        getFoods();
      },[])




 return (
  <View className='flex-1 px-4 mb-11 flex-col ' style={{gap:10}}>
    {restaurants.map( item => (
        <RestaurantItem item={item} key={item.id}/>
    ))}
  </View>
  );
}

export default RestaurantsVesticalList;