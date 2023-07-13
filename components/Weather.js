
import {Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";


export default function Wheather({Temperatura,Max,Min,Lugar}) {
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
<View className="bg-white mb-[8%] w-[94%] h-[8%] rounded-sm shadow-md flex-row">
<View className="w-[50%] h-[100%]">
<View className="h-[50%] flex-row items-center justify-center">
    
<View className="pl-[2px]">
 <Ionicons
          name={"sunny"}
          size={32}
          color="#FED766"
        />   
</View>

<Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 28,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                {Temperatura}
              </Text>

</View>
<View className="h-[50%] flex-row">
<View className="w-[50%] items-center justify-center flex-row">
<Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Max.: 
              </Text> 
              <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                 {Max}
              </Text> 
</View>
<View className="w-[50%] items-center justify-center flex-row">
<Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Min.: 
              </Text> 
              <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                 {Min}
              </Text> 
</View>
</View>
</View>


<View className="items-center justify-center w-[50%]">
 <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 22,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                {Lugar}
              </Text>    
</View>
   
</View>
  );
}
