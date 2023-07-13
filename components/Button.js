import React, { useEffect, useState, useCallback } from "react";
import { Text,TouchableOpacity} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Button() {
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
  activeOpacity={0.8}
  className="bg-[#559CAD] rounded-md min-h-[9%] max-h-3 justify-center items-center w-[70%] shadow-sm shadow-[#565759] mt-12"
>
  <Text
    style={{
      fontFamily: "MulishBold",
      fontSize: 16,
      color: "white",
      textShadowColor: "#565759",
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    }}
  >
    Iniciar sesión
  </Text>
</TouchableOpacity>
  );
}