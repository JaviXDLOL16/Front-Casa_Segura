
import { Text, View, Image, TextInput } from "react-native";
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { KeyboardAvoidingView } from "react-native";


import { background2 } from "../assets";
import { Logo } from "../assets";
import Input from "../components/Input";
import Button from "../components/Button";
import { LogoG } from "../assets";




export default function Login() {
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

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View className="bg-[#565759] flex-1" onLayout={onLayout}>
      <Image
        source={background2} // Ruta de la imagen de fondo
        className="absolute top-0 bottom-0 left-0 right-0 w-[100%] h-[80%] "
      />

      <View className="mt-[20%] ml-[5%]">
        <Image
         className="w-[180] h-[30]"
         source={LogoG} // Ruta del logo
        />
      </View>
      <View className="items-center justify-end flex-1 mb-[5%] ">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "position"}
          enabled={true}
          className=" h-[100%] max-w-[94%] flex-1"
        >
          <View className="bg-[#F0F0F2] h-[510px] min-h-[75%] items-center rounded-md shadow-sm shadow-[#565759] mt-[42%]">
            <View className="bg-[#565759] rounded-md min-h-[8%] max-h-3  w-[38%] justify-center items-center mt-6 shadow-sm shadow-[#565759]">
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
                Iniciar sesion
              </Text>
            </View>
            <View className="mt-4">
              <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 26,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Bienvendido de vuelta
              </Text>
            </View>
            <View className="mt-10 mb-1 w-[75%]">
              <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                }}
              >
                Usuario
              </Text>
            </View>
            <Input
              placeholder="Ingresa tu usuario"
              password={false}
              secureTextEntry={false}
              secure={false}
            />

            <View className="w-[75%] flex-row justify-between mt-10 mb-1">
              <Text
                style={{
                  fontFamily: "MulishBold",
                  fontSize: 14,
                  color: "#565759",
                }}
              >
                Contraseña
              </Text>
              <Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                }}
              >
                ¿Haz olvidado tu contraseña?
              </Text>
            </View>
            <Input
              placeholder="Ingresa tu contraseña"
              password={true}
              secureTextEntry={true}
              secure={true}
            />
            <Button></Button>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
