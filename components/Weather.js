
import { Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";


export default function Wheather({ Temperatura, Max, Min, Lugar }) {
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
    <View className="bg-white w-[94%] h-[100px] mt-6 border-[1px] border-[#c4c4c4] rounded-md shadow-sm shadow-slate-950 flex-row ">
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
              }}
            >
              Max.:
            </Text>
            <Text
              style={{
                fontFamily: "MulishBold",
                fontSize: 14,
                color: "#565759",
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
              }}
            >
              Min.:
            </Text>
            <Text
              style={{
                fontFamily: "MulishBold",
                fontSize: 14,
                color: "#565759",
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
          }}
        >
          {Lugar}
        </Text>
      </View>

    </View>
  );
}
