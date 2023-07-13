import {Text, View,TouchableOpacity,FlatList } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";


export default function Table({}) {
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
<View className="w-[100%] h-[7%] bg-white mt-[8%] rounded-t-lg flex-row">
<View className="w-[100%] flex-row justify-between p-[]">
<Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Temperatura
              </Text> 
              <Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Temperatura
              </Text> 
              <Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Temperatura
              </Text> 
              <Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Temperatura
              </Text> 

</View>
</View>
  );
}