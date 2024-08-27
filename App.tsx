
// import React, { useState } from 'react';
// import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import useStore from './src/store/themeStore';
// import Form from './src/components/form/styles';

// export default function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const { theme, toggleTheme } = useStore(state => ({
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

//   async function cadastrar() {
//     try {
//       const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//       Alert.alert('Usuário Criado com Sucesso', `Email: ${userCredential.user.email}`);
//       setEmail('');
//       setPassword('');
//     } catch (error) {
//       if (error.code === 'auth/weak-password') {
//         Alert.alert('Sua Senha deve ter pelo menos 6 caracteres');
//       } else if (error.code === 'auth/invalid-email') {
//         Alert.alert('Email Inválido');
//       } else {
//         Alert.alert('Ops algo deu errado');
//       }
//     }
//   }

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <Form
//         isDarkMode={isDarkMode}
//         handleToggleDarkMode={handleToggleDarkMode}
//         handleToggleLightMode={handleToggleLightMode}
//         email={email}
//         setEmail={setEmail}
//         password={password}
//         setPassword={setPassword}
//         cadastrar={cadastrar}
//       />
//     </TouchableWithoutFeedback>
//   );
// }





// import React from 'react';
// import { SafeAreaView, Text, View } from 'react-native';
// import tw from 'twrnc';


// const App = () => {
//   return (
    
//       <View>
//       <Text style={tw`text-red-600 text-xl`}>Olá Bruno</Text>
//       </View>
//   );
// };

// export default App;



// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import { StyledForm } from './src/components/form/styles';
// import { useColorScheme } from 'nativewind';  // Importando useColorScheme do NativeWind

// const App = () => {
//   const colorScheme = useColorScheme();  // Hook para obter o esquema de cores

//   return (
//     <SafeAreaView className={`flex-1 justify-center items-center bg-gray-100 ${colorScheme === 'dark' ? 'dark:bg-gray-900' : ''}`}>
//       <StyledForm />
//     </SafeAreaView>
//   );
// };

// export default App;







// import React from 'react';
// import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
// import { useColorScheme } from 'nativewind';  // Importando do NativeWind

// const Section = ({ children, title }) => {
//   return (
//     <View className="mt-8 px-4">
//       <Text className="text-2xl font-bold text-black dark:text-white">
//         {title}
//       </Text>
//       <Text className="mt-2 text-lg text-black dark:text-white">
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   const colorScheme = useColorScheme();  // Hook do NativeWind para o esquema de cores

//   return (
//     <SafeAreaView className={`bg-neutral-300 dark:bg-slate-900 flex-1`}>
//       <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
//       <ScrollView contentInsetAdjustmentBehavior="automatic" className="bg-neutral-300 dark:bg-slate-900">
//         <View className="bg-white dark:bg-black">
//           <Section title="Step One">
//             Edit <Text className="font-bold">App.js</Text> to change this screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             Reload your app to see the changes.
//           </Section>
//           <Section title="Debug">
//             Follow the instructions to debug your app.
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next.
//           </Section>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;





// 



// import React from 'react';
// import { Text, View } from 'react-native';
// // import { styled } from 'nativewind'; 

// export default function App() {
//   return (
//     <View className="flex-1 bg-black-500 items-center justify-center">
//       <Text className="text-lg text-white">Hello World bruno pereira</Text>
//     </View>
//   );
// }



// import { Text, View } from 'react-native';

// const TestComponent = () => {
//   return (
//     <View className="flex-1 items-center justify-center bg-gray-100">
//       <Text className="text-blue-500 text-lg">Testing NativeWind Styles!</Text>
//     </View>
//   );
// };

// export default TestComponent;





// import { View,Text } from 'react-native';


// export default function appdev() {
//  return (
//    <View>
//     <Text>BRUNO</Text>
//    </View>
//   );
// }




// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// // Componente HelloWorld
// const HelloWorld: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, World!</Text>
//     </View>
//   );
// };

// // Estilos
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//   },
// });

// // Componente principal
// const App: React.FC = () => {
//   return <HelloWorld />;
// };

// export default App;


import React from 'react';
import { View, Text } from 'react-native';
// import 'nativewind/tailwind.css'; // Importa as classes do Tailwind

const App: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold text-blue-500">BRUNO Pereira</Text>
    </View>
  );
};

export default App;
