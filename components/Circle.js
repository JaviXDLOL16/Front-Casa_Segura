import React, { useEffect, useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {Text, View,ScrollView } from 'react-native';

export default function Circle({Datos,Informacion}) {
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
<View className="items-center w-[100%] mb-8">
<View className="flex-grow items-center w-[50%]">
<Text
                style={{
                    textAlign: 'center',
                  fontFamily: "MulishBold",
                  fontSize: 26,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                {Informacion}
              </Text>
</View>

<View className="bg-white w-[250px] h-[250px] rounded-full items-center justify-center mt-[3%] shadow-sm">
<Text
                style={{
                    textAlign: 'center',
                  fontFamily: "MulishBold",
                  fontSize: 40,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
               {Datos}
              </Text>
</View>

</View>
  );
}