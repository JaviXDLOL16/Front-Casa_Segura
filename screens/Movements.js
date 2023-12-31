import { Text, View, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";


import SectionIndicator from '../components/SectionIndicator';
import Task from '../components/Task';
import Circle from '../components/Circle';
import Table from '../components/Table';
import NightMode from '../components/NightMode';
import Alarm from '../components/Alarm';


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

    <View className="flex-1 h-[100%] bg-[#F0F0F2] items-center" onLayout={onLayout}>
      <SectionIndicator
        Texto={"Movimientos"}
      />

      <ScrollView className="w-[94%]">
        <Circle
          Informacion={"Movimientos detectados hoy"}
          Datos={"0"}
        />
        <Alarm buttonOnTopic={"/homeSecure/esp32/alarm"} buttonOffTopic={"/homeSecure/esp32/alarm"}/>
        <Table
          Sensor={1}
          Movimientos={2}
          Fecha={"12-07-2023"}
          Hora={"12:55 a.m."}
        />
      </ScrollView>
      <Task></Task>
    </View>

  );
}
