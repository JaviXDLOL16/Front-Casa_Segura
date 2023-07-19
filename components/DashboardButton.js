import { StatusBar } from 'expo-status-bar';
import {Text, View,TouchableOpacity} from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";


export default function DashboardButton({Datos, Icono,onPress}) {
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

    
  return (

    <TouchableOpacity 
    onPress={onPress}
    activeOpacity={0.8}
    className="w-[94%] h-[28%] mb-[2%] bg-white rounded-md shadow-md flex-row">
        <View className="justify-center items-center w-[75%] h-[100%] ">
        <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 32,
                  color: "#565759",
                }}
              >
                {Datos}
              </Text>
        </View>

        <View className="w-[25%] h-[100%] justify-center items-start">
        <Ionicons
          name={Icono}
          size={64}
          color="#565759"
        />  
        </View>

    </TouchableOpacity>

  );
}
