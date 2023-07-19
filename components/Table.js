import {Text, View,TouchableOpacity,FlatList } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";


export default function Table({Sensor,Movimientos,Fecha,Hora}) {
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
<>
<View className="w-[100%] bg-white rounded-t-xl flex-row border-[#F0F0F2] border-b-[1px]">
  <View className=" w-[25%] py-[3%] items-center border-[#F0F0F2]">
<Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                Sensor
              </Text> 
              </View>

              <View className=" w-[25%] py-[3%] items-center border-[#F0F0F2] border-x-[1px] ">
              <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                Movimientos
              </Text> 
              </View>

              <View className=" w-[25%] py-[3%] items-center border-[#F0F0F2] border-r-[1px]">
              <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                Hora
              </Text>
              </View>

              <View className=" w-[25%] py-[3%] items-center">
              <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                Fecha
              </Text>
              </View> 
</View>


<View className="w-[100%] bg-white flex-row border-[#F0F0F2] border-y-[1px] ">
  <View className=" w-[25%] py-[3%] items-center flex-grow">
<Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                {Sensor}
              </Text> 
              </View>

              <View className=" w-[25%] py-[3%] items-center border-[#F0F0F2] border-x-[1px] flex-grow">
              <Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                {Movimientos}
              </Text> 
              </View>

              <View className=" w-[25%] py-[3%] items-center border-[#F0F0F2] border-r-[1px] flex-grow">
              <Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                {Hora}
              </Text>
              </View>

              <View className=" w-[25%] py-[3%] items-center flex-grow">
              <Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                {Fecha}
              </Text>
              </View> 
</View>
</>  

  );
}