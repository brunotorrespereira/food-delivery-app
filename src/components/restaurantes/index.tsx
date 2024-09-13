
import React,{useState, useEffect} from 'react';
import { View,Text,Pressable,FlatList } from 'react-native';
import RestaurantsItem from './horizontal';


export interface RestaurantsProps{
    id: string;
    name: string;
    image: string
}

const Restaurants: React.FC = ()=> {
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
    <FlatList
    data={restaurants}
    renderItem={({item}) => <RestaurantsItem item={item}/>}
    keyExtractor={(item) => item.id}
    horizontal={true}
    contentContainerStyle={{ gap: 14, paddingLeft:16, paddingRight: 16}}
    showsHorizontalScrollIndicator={false}
    />
  );
}

export default Restaurants;