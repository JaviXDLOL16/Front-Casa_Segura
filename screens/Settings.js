import {Text, View,ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from '@react-navigation/native';
import Button from "../components/Button";
import { Storage } from 'expo-storage'
import SectionIndicator from '../components/SectionIndicator';
import Task from '../components/Task';
import Circle from '../components/Circle';



export default function Settings() {
  const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        MulishBold: require("../assets/fonts/Mulish-Bold.ttf"),
        MulishLight: require("../assets/fonts/Mulish-Light.ttf"),
      });

      const deleteData = async () => {
        try {
          await Storage.removeItem({ key: `user-data` })
          await Storage.removeItem({ key: `user-token` })
          console.log("datos eliminados manito")
          navigation.navigate("Login")
        }
        catch {
        }
      }
    
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

 <View className="flex-1 h-[100%] bg-[#F0F0F2] items-center justify-center" onLayout={onLayout}>
  <Button
            
            onPressIn={deleteData}
            TextI={"Cerrar sesion"}
            color='red'
            />
            <Task></Task>

 </View>

  );
}
