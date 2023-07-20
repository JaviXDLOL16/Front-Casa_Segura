import React, { useEffect, useState, useCallback } from "react";
import { Text,TouchableOpacity} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Button({onPressIn, color = "#559CAD",TextI}) {
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
  onPressIn={onPressIn}
  activeOpacity={0.8}
  className={`rounded-md min-h-[9%] max-h-3 justify-center items-center w-[70%] shadow-sm shadow-[#565759] mt-12`}
  style={{backgroundColor: color}}
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
    {TextI}
  </Text>
</TouchableOpacity>
  );
}
