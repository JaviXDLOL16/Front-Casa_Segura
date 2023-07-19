import {Text, View,ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";


import SectionIndicator from '../components/SectionIndicator';
import Task from '../components/Task';
import Circle from '../components/Circle';



export default function Gas() {
    const [fontsLoaded] = useFonts({
        MulishBold: require("../assets/fonts/Mulish-Bold.ttf"),
        MulishLight: require("../assets/fonts/Mulish-Light.ttf"),
      });
    
      useEffect(() => {
        async function prepare() {
          await SplashScreen.preventAutoHideAsync();
        }
        prepare();
      }, []);
    
      const onLayout = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) return null;

  return (

 <View className="flex-1 h-[100%] bg-[#F0F0F2] items-center" onLayout={onLayout}>
<SectionIndicator
Texto={"Monitor de humo"}
/>

<ScrollView className="w-[94%]">
<Circle
Informacion={"Todo se encuentra en orden"}
Datos={"Si"}
/>

</ScrollView>
<Task></Task>
 </View>

  );
}
