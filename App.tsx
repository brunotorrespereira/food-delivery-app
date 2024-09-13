

// import React, { useState } from 'react';
// import { Alert, Keyboard, TouchableWithoutFeedback, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import useStore from './src/store/themeStore';

// const App: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [name, setName] = useState<string>(''); 

//   const { theme, toggleTheme } = useStore((state) => ({
//     theme: state.theme,
//     toggleTheme: state.toggleTheme,
//   }));

//   const isDarkMode = theme === 'dark';

//   const handleToggleDarkMode = () => {
//     toggleTheme();
//   };

//   const handleToggleLightMode = () => {
//     toggleTheme();
//   };

//   const cadastrar = async () => {
//     try {
//       const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//       Alert.alert('Usuário Criado com Sucesso', `Email: ${userCredential.user.email}`);
//       setEmail('');
//       setPassword('');
//       setName(''); 
//     } catch (error: any) {
//       if (error.code === 'auth/weak-password') {
//         Alert.alert('Sua Senha deve ter pelo menos 6 caracteres');
//       } else if (error.code === 'auth/invalid-email') {
//         Alert.alert('Email Inválido');
//       } else {
//         Alert.alert('Ops algo deu errado');
//       }
//     }
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} flex-1 justify-center`}>
        
//         <View className="absolute top-10 right-5">
//           <View className="flex-row items-center mb-2">
//             <Text className={`text-lg mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Light</Text>
//             <Switch value={!isDarkMode} onValueChange={handleToggleLightMode} />
//           </View>
//           <View className="flex-row items-center">
//             <Text className={`text-lg mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Dark</Text>
//             <Switch value={isDarkMode} onValueChange={handleToggleDarkMode} />
//           </View>
//         </View>

        
//         <View className="p-4">
//           <Text className={`text-2xl mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Nome</Text>
//           <TextInput
//             className={`mb-4 p-3 border border-gray-400 text-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
//             onChangeText={setName}
//             value={name}
//           />
//           <Text className={`text-2xl mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</Text>
//           <TextInput
//             className={`mb-4 p-3 border border-gray-400 text-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
//             onChangeText={setEmail}
//             value={email}
//           />
//           <Text className={`text-2xl mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Senha</Text>
//           <TextInput
//             className={`mb-6 p-3 border border-gray-400 text-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
//             onChangeText={setPassword}
//             value={password}
//             secureTextEntry={true}
//           />
//         </View>

        
//         <TouchableOpacity
//           className={`p-4 rounded-lg items-center mx-4 ${isDarkMode ? 'bg-blue-600' : 'bg-green-500'}`}
//           onPress={cadastrar}
//         >
//           <Text className="text-white text-xl">Novo Funcionário</Text>
//         </TouchableOpacity>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// export default App;










// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, Text,ScrollView} from 'react-native';
// import Header from './src/components/header';
// import { StatusBar } from 'react-native';



// const Stack = createNativeStackNavigator();

// const App: React.FC = () => {
  

//   return (
//     <NavigationContainer>
//          <View className="flex-1 pt-[statusBarHeight] bg-black"> 
//       <StatusBar backgroundColor='transparent' barStyle='light-content'
//       translucent={true}/>
//       <Stack.Navigator initialRouteName='Header'>
//       <Stack.Screen name='Header' component={Header} options={{ headerShown: false }}/>
//     </Stack.Navigator>
//     </View>
//     </NavigationContainer>
    
//   );
// };

// export default App;



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, StatusBar, Platform } from 'react-native';
// import Header from './src/components/header';

// const Stack = createNativeStackNavigator();


// const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

// const App: React.FC = () => {
//   return (
//     <NavigationContainer> 
//       <View style={{ paddingTop: statusBarHeight }}
//         className={`flex-1 pt-[${statusBarHeight}px]`}> 
//         <StatusBar 
//           backgroundColor="#f5f5f5"
//           barStyle="dark-content" 
//           translucent={true} 
//         />
//         <Stack.Navigator initialRouteName='Header'>
//           <Stack.Screen 
//             name='Header' 
//             component={Header} 
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </View>
//     </NavigationContainer>
//   );
// };

// export default App;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StatusBar } from 'react-native';
import Header from './src/components/header';
// import Banner from './src/components/banner';

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
           {/* <Stack.Screen 
            name='Banner' 
            component={Banner} 
            options={{ headerShown: false }}

          /> */}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;


