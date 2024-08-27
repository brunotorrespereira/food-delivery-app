

// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
// import tw from 'twrnc';

// export default function Form({
//   isDarkMode,
//   handleToggleDarkMode,
//   handleToggleLightMode,
//   email,
//   setEmail,
//   password,
//   setPassword,
//   cadastrar
// }) {
//   return (
//     <View style={tw`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} flex-1 justify-center`}>
//       <View style={tw`absolute top-10 right-5`}>
//         <View style={tw`flex-row items-center mb-2`}>
//           <Text style={tw`${isDarkMode ? 'text-white' : 'text-black'} mr-2 text-lg`}>Light</Text>
//           <Switch
//             value={!isDarkMode}
//             onValueChange={handleToggleLightMode}
//           />
//         </View>
//         <View style={tw`flex-row items-center`}>
//           <Text style={tw`${isDarkMode ? 'text-white' : 'text-black'} mr-2 text-lg`}>Dark</Text>
//           <Switch
//             value={isDarkMode}
//             onValueChange={handleToggleDarkMode}
//           />
//         </View>
//       </View>

//       <Text style={tw`${isDarkMode ? 'text-white' : 'text-black'} text-2xl ml-2`}>Email</Text>
//       <TextInput
//         style={tw`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} mb-4 p-3 border border-gray-400 ml-2 text-lg`}
//         onChangeText={setEmail}
//         value={email}
//       />
//       <Text style={tw`${isDarkMode ? 'text-white' : 'text-black'} text-2xl ml-2`}>Senha</Text>
//       <TextInput
//         style={tw`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} mb-4 p-3 border border-gray-400 ml-2 text-lg`}
//         onChangeText={setPassword}
//         value={password}
//         secureTextEntry={true}
//       />
//       <TouchableOpacity
//         style={tw`${isDarkMode ? 'bg-blue-600' : 'bg-green-500'} p-4 rounded-lg items-center mt-6 mx-2`} // Cor alterada para verde
//         onPress={cadastrar}
//       >
//         <Text style={tw`text-white text-xl`}>Novo Funcionário</Text>
//       </TouchableOpacity>
    
//     </View>
//   );
// }




// src/components/form/styles.js
// import React from 'react';
// import { View, TextInput, Text, Button } from 'react-native';

// export function StyledForm() {
//   return (
//     <View className="p-4 bg-red rounded-lg shadow-md">
//       <Text className="text-2xl font-bold text-gray-800 mb-4">Login</Text>
//       <TextInput
//         className="border border-blue-300 rounded p-2 mb-4"
//         placeholder="Username"
//       />
//       <TextInput
//         className="border border-red-300 rounded p-2 mb-4"
//         placeholder="Password"
//         secureTextEntry
//       />
//       <Button title="Submit" className="bg-blue-500 text-white p-2 rounded" />
//     </View>
//   );
// }




// import React from 'react';
// import { View, TextInput, Text, Button } from 'react-native';

// export function StyledForm() {
//   return (
//     <View className="p-4 bg-red-500 rounded-lg shadow-md">
//       <Text className="text-2xl font-bold text-gray-800 mb-4">Entrando</Text>
//       <TextInput
//         className="border border-blue-300 rounded p-2 mb-4"
//         placeholder="Username"
//       />
//       <TextInput
//         className="border border-red-300 rounded p-2 mb-4"
//         placeholder="Password"
//         secureTextEntry
//       />
//       <Button title="Submit" color="#ffffff" className="bg-blue-500 p-2 rounded" />
//     </View>
//   );
// }
