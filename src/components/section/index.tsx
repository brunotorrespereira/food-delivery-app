

import { View,Text,Pressable } from 'react-native';

interface Sectionprops{
    name: string;
    size:"text-lg" | "text-xl" | "text-2xl";
    label: string;
    action: () => void;
}
const Section: React.FC<Sectionprops>= ({name,size,label,action})=> {

 return (
   <View className='w-full flex flex-row items-center justify-between px-4'>
    <Text className={`${size} font-bold my-4 self-start`}>
      {name}
    </Text>
    <Pressable onPress={action}>
        <Text>{label}</Text>
    </Pressable>
   </View>
  );
}

export default Section;