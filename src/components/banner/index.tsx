import React from 'react';
import { View, Text,Pressable,Image } from 'react-native'; 
import PageView from 'react-native-pager-view'

const Banner: React.FC = () => {
  
  return (
    <View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4'>
      <PageView style={{flex:1}} initialPage={0} pageMargin={14}>

        <Pressable 
        className='px-3 w-full h-36 md:h-60 rounded-2xl' 
        key='1'
        onPress={() => console.log('Clicou na imagem 1')}
        >
        <Image
        source={require('../../assets/banner.jpg')}
        className='w-full h-36 md:h-60 rounded-2xl '
        />
        </Pressable>

        <Pressable 
        className='px-3 w-full h-36 md:h-60 rounded-2xl' 
        key='1'
        onPress={() => console.log('Clicou na imagem 2')}
        >
        <Image
        source={require('../../assets/imagem2.jpg')}
        className='w-full h-36 md:h-60 rounded-2xl '
        />
        </Pressable>
        </PageView>
    </View>
  );
};

export default Banner;
