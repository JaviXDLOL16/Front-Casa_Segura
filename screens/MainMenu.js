
import { Text, View, SafeAreaView } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";


import SectionIndicator from '../components/SectionIndicator';
import Wheather from '../components/Weather';
import DashboardButton from '../components/DashboardButton';
import Task from '../components/Task';

export default function MainMenu() {
  const navigation = useNavigation();
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

  const handleButtonPress = (onPress) => {
    navigation.navigate(onPress);
  };

  return (

    <View className="flex-1 bg-[#F0F0F2] items-center justify-start" onLayout={onLayout}>

      <SectionIndicator
        Texto={"Menu principal"}
      />

      <Wheather
        Lugar={"Tuxtla Gutierrez"}
        Max={"38°"}
        Min={"42°"}
        Temperatura={"65°"}
      />

      <View className="h-[60%] justify-start px-2 mt-12">
        <DashboardButton
          onPress={() => handleButtonPress('Movements')}
          Datos="Movimientos"
          Icono="body"
          color={"#559CAD"}
        />

        <DashboardButton
          onPress={() => handleButtonPress('Temperature')}
          Datos="Temperatura"
          Icono="partly-sunny"
          color={"#565759"}
        />

        <DashboardButton
          onPress={() => handleButtonPress('Gas')}
          Datos="Monitor de humo"
          Icono="flame"
          color="#E65F5C"
        />

      </View>

      <Task
      />


    </View>

  );
}

