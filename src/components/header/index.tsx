
import React from 'react';
import { View, Text, Pressable,ScrollView,StatusBar,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Banner from '../banner';
import Search from '../search';
import Section from '../section';
import Trending from '../trending';
import Restaurants from '../restaurantes';
import List from '../list';
import RestaurantsVesticalList from '../list';

// type RotasTypes = {
//   Header: undefined;
//   Banner: undefined;
// };

// type AppTypes = NativeStackNavigationProp<RotasTypes>;

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;

const Header: React.FC = () => {
  // const navigation = useNavigation<AppTypes>();

  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
     <View className="px-3 w-full flex flex-row items-center 
         justify-between " style={{ marginTop: statusBarHeight + 14}} >

        <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center
        items-center">

        <Icon name='menu' size={25} color='#121212' />
       </Pressable> 
       
       <View className='flex flex-col items-center justify-center'>
        <Text className='text-center text-sm text-slate-800'>localização</Text>

        <View className='flex-row items-center justify-center gap-1'>
        <Feather name="map-pin" size={18} color="#FF0000" /> 
        <Text className='text-lg font-bold'>Campo Grande</Text>
        </View>
       </View>

       <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center
        items-center">
        <Icon name='notifications' size={25} color='#121212' />
       </Pressable> 
       
       
       </View>

       <Banner/>
       <Search/>
       <Section
       name='Comidas em Alta'
       label='Veja mais'
       action={() => console.log('Clicou no veja Mais')}
       size='text-2xl'
       />
       <Trending/>
       <Section
       name='famosos no DevFood'
       label='Veja todos'
       action={() => console.log('Clicou no veja Mais')}
       size='text-xl'
       />
       
       <Restaurants/>

       <Section
       name='Restaurantes'
       label='Veja todos'
       action={() => console.log('Clicou no Restaurantes')}
       size='text-xl'
       />
       <RestaurantsVesticalList/>
       
  </ScrollView>
  
  
  );
}

export default Header;






