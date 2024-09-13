

import React,{ useEffect,useState} from 'react';
import { View,Text,FlatList} from 'react-native';
import CardHorizontalFood from './food';


    export interface FoodProps{
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string
}


const Trending: React.FC = ()=> {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods(){
     const response = await fetch('http://192.168.1.42:3000/foods')
     const data = await response.json()
     setFoods(data)
    }
    getFoods();
  },[])

 return (
   <FlatList
   data={foods}
   renderItem={({item}) => <CardHorizontalFood food={item}/>}
   keyExtractor={(item) => item.id}
   horizontal={true}
   contentContainerStyle={{ gap: 14, paddingLeft:16, paddingRight: 16}}
   showsHorizontalScrollIndicator={false}
   />
  );
}

export default Trending;