import {Text, View,ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";

import SectionIndicator from '../components/SectionIndicator';
import Task from '../components/Task';
import Circle from '../components/Circle';
import Graphic from '../components/Graphic';


export default function Temperature() {
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


      const temp = [
        { time: '8:00', temperature: 27 },
        { time: '10:00', temperature: 22 },
        { time: '12:00', temperature: 24 },
        { time: '14:00', temperature: 28 },
        { time: '14:00', temperature: 32 },
        { time: '14:00', temperature: 16 },
        { time: '14:00', temperature: 20 },
        { time: '14:00', temperature: 27 },
        { time: '14:00', temperature: 38 },
        { time: '14:00', temperature: 20 },
        { time: '14:00', temperature: 27 },
        { time: '14:00', temperature: 38 },
        // Agrega más datos según sea necesario
      ];

  return (

 <View className="flex-1 bg-[#F0F0F2] items-center" onLayout={onLayout}>
<SectionIndicator
Texto={"Temperatura"}
/>

<ScrollView className="w-[94%]">
<Circle
Informacion={"Temperatura Interior"}
Datos={"55°"}
/>
<Graphic
temp={temp}
/>    
</ScrollView>



<Task></Task>
 </View>

  );
}
