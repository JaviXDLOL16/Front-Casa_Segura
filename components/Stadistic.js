import {Text, View,TouchableOpacity,FlatList } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";


export default function Stadistic({Varianza,VMedia,Estandar,Media}) {
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
<View className="w-[100%] bg-white rounded-t-xl flex-row border-[#F0F0F2] border-b-[1px] mt-[5%]">
  <View className=" w-[25%] py-[3%] items-center border-[#F0F0F2]">
<Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                Media
              </Text> 
              </View>

              <View className=" w-[25%] py-[3%] items-center border-[#F0F0F2] border-x-[1px] ">
              <Text
                style={{
                textAlign: 'center',
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                Desviacion media
              </Text> 
              </View>

              <View className=" w-[25%] py-[3%] items-center border-[#F0F0F2] border-r-[1px]">
              <Text
                style={{
                    textAlign: 'center',
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                Desviacion estandar
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
                Varianza
              </Text>
              </View> 
</View>


<View className="w-[100%] bg-white flex-row border-[#F0F0F2] border-y-[1px] rounded-b-xl">
  <View className=" w-[25%] py-[3%] items-center flex-grow">
<Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  
                }}
              >
                {Media}
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
                {VMedia}
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
                {Estandar}
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
                {Varianza}
              </Text>
              </View> 
</View>
</>  

  );
}