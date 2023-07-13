import {Text, View,ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";


import SectionIndicator from '../components/SectionIndicator';
import Task from '../components/Task';
import Circle from '../components/Circle';
import Table from '../components/Table';


export default function Movements() {
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

 <View className="flex-1 bg-[#F0F0F2] items-center" onLayout={onLayout}>
<SectionIndicator
Texto={"Temperatura"}
/>

<ScrollView className="w-[94%]">
<Circle
Informacion={"Movimientos detectados hoy"}
Datos={"55°"}
/>
<Table/>
</ScrollView>
<Task></Task>
 </View>

  );
}
