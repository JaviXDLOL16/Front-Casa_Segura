import {Text, View,TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function Task() {
    const navigation = useNavigation();
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

    
      const handleButtonPress = (onPress) => {
        navigation.navigate(onPress);
      };

  return (
<View className="w-[100%] h-[8%] bg-[#565759] mt-[8%] rounded-t-lg flex-row">
<View className="w-[50%] items-start justify-center">
<TouchableOpacity 
onPress={() => handleButtonPress("MainMenu")}
className="ml-[5%] h-[100%] justify-center items-center w-[30%]">
 <Ionicons
        
          name={"home"}
          size={36}
          color="white"
        />   
</TouchableOpacity>
</View>
<View  className="w-[50%] items-end justify-center">
<TouchableOpacity 
onPress={() => handleButtonPress("Settings")}
className="mr-[5%] h-[100%] justify-center items-center w-[30%]">
 <Ionicons
        
          name={"cog"}
          size={36}
          color="white"
        />   
</TouchableOpacity>

</View>
</View>

  );
}