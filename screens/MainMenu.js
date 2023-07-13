
import {Text, View,SafeAreaView } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";

import SectionIndicator from '../components/SectionIndicator';
import Wheather from '../components/Weather';
import DashboardButton from '../components/DashboardButton';
import Task from '../components/Task';

export default function MainMenu() {
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

 <View className="flex-1 bg-[#F0F0F2] items-center justify-between" onLayout={onLayout}>

<SectionIndicator
Texto={"Menu principal"}
/>

<Wheather
Lugar={"Tuxtla Gutierrez"}
Max={"38°"}
Min={"42°"}
Temperatura={"65°"}
/>

<DashboardButton
Datos="Movimientos"
Icono="body"
/>

<DashboardButton
Datos="Temperatura"
Icono="partly-sunny"
/>

<DashboardButton
Datos="Monitor de humo"
Icono="flame"
/>

<DashboardButton
Datos="Sensor de luz"
Icono="flash"
/>


<Task></Task>


 </View>

  );
}

