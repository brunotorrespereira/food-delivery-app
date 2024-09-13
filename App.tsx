
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StatusBar } from 'react-native';
import Header from './src/components/header';


const Stack = createNativeStackNavigator();


const App: React.FC = () => {
  return (
    <NavigationContainer> 
      <View className="flex-1 bg-[#f5f5f5]"> 
        <StatusBar 
          backgroundColor="#f5f5f5"
          barStyle="dark-content" 
          translucent={true} 
        />
        <Stack.Navigator initialRouteName='Header'>
          <Stack.Screen 
            name='Header' 
            component={Header} 
            options={{ headerShown: false }}
          />
          
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;


