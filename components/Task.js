import {Text, View,TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";


export default function Task({}) {
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
<View className="w-[100%] h-[7%] bg-[#565759] mt-[8%] rounded-t-lg flex-row">
<View className="w-[50%] items-start justify-center">
<TouchableOpacity className="ml-[5%] h-[80%] justify-center items-center w-[20%]">
 <Ionicons
        
          name={"home"}
          size={32}
          color="white"
        />   
</TouchableOpacity>
</View>
<View  className="w-[50%] items-end justify-center">
<TouchableOpacity className="mr-[5%] h-[80%] justify-center items-center w-[20%]">
 <Ionicons
        
          name={"cog"}
          size={32}
          color="white"
        />   
</TouchableOpacity>

</View>
</View>

  );
}