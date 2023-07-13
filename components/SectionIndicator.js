import {Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function SectionIndicator({Texto}) {
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
    <View className="bg-[#565759] h-[10%] items-center justify-center w-[100%] rounded-b-lg mb-2 shadow-sm shadow-[#565759]">
        <Text
        className="mt-[6%]"
    style={{
      fontFamily: "MulishBold",
      fontSize: 24,
      color: "white",
      textShadowColor: "#565759",
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    }}
  >
    {Texto}
  </Text>
    </View>

  );
}
