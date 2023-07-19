import React, { useEffect, useState } from "react";
import { View, TextInput,Keyboard } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

export default function Input({
  placeholder,
  password,
  secureTextEntry,
  secure,
  onChangeText,
  onBlur,
  autoCapitalize,
  value
}) {
  const [fontsLoaded] = useFonts({
    MulishBold: require("../assets/fonts/Mulish-Bold.ttf"),
    MulishLight: require("../assets/fonts/Mulish-Light.ttf"),
  });

  const [isSecure, setIsSecure] = useState(secure);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  return (
    <View className="bg-white rounded-md w-[78%] h-11 items-center justify-between flex-row shadow-sm ">
      <TextInput
        style={{ fontFamily: "MulishLight", fontSize: 16, color: "#565759",}}
        className="ml-2 flex-1 h-[100%] rounded-md"
        placeholder={placeholder}
        password={password}
        secureTextEntry={isSecure}
        returnKeyType="done"
        onSubmitEditing={Keyboard.dismiss}
        onChangeText={onChangeText}
        onBlur={onBlur}
        autoCapitalize={autoCapitalize}
        value={value}
      />
      {secure && (
        <View className="pr-2">
        <Ionicons
          onPress={() => setIsSecure(!isSecure)}
          name={isSecure ? "eye" : "eye-off"}
          size={25}
          color="#565759"
        />
        </View>
      )}
    </View>
  );
}

/*<Icon
className="text-center py-2 w-[10%]"
  onPress={() => setIsSecure(!isSecure)}
  name={isSecure ? "eye" : 'eye-slash'}
  size={20}
  color='#565759'

/>*/
