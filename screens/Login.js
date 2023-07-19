
import { Text, View, Image, Alert } from "react-native";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState, useLayoutEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { KeyboardAvoidingView } from "react-native";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import { Storage } from "expo-storage";


import { background2 } from "../assets";
import Input from "../components/Input";
import Button from "../components/Button";
import { LogoG } from "../assets";
import { BASE_URL } from '@env'






export default function Login() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false)


  const [fontsLoaded] = useFonts({
    MulishBold: require("../assets/fonts/Mulish-Bold.ttf"),
    MulishLight: require("../assets/fonts/Mulish-Light.ttf"),
  });

  


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const saveToken = async (data) => {
    try {
      await Storage.setItem({
        key: `user-token`,
        value: JSON.stringify(data)
      })
    } catch (error) {
    }
  }

  const handleLogin = async (values, resetForm) => {//ahi nomas quedo manito, ya hasta guarda el token, lo demas de los botones y ese pedo no se como hacerlo xd
                                                    //despues veo lo de sacar los datos para la grafica
    setIsLoading(true)
    try {
      const response = await axios.post(`${BASE_URL}auth/token`, values);
      if (response.data.success == true) {
        //setIsCorrect(true)
        saveToken(response.data.data)
        resetForm()
        navigation.navigate('MainMenu')
      }
      else if (response.data.success == false) {
        Alert.alert('Usuario incorrecto')
        setIsLoading(false)
        //setIsWrong(true)
      }
      else if (response.data.status == null) {
        Alert.alert('Error al iniciar sesion')
        setIsLoading(false)
      }
      else {
        Alert.alert('Error desconocido')
        setIsLoading(false)
      }
      return response.data;
    }
    catch (e) {
    }

  };

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



  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Ingresa un correo "@"').required('No ha ingresado un email'),
    password: Yup.string().required('No ha ingresado una contraseña'),
  })


  return (
    <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    validationSchema={SignupSchema}
    onSubmit={(values, { resetForm }) => {
      handleLogin(values, resetForm)
    }}
  >
    {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
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
              placeholder="Ingresa tu correo"
              password={false}
              secureTextEntry={false}
              secure={false}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              autoCapitalize={"none"}
              value={values.email}
            />
            {touched.email && errors.email && (
            <Text >{errors.email}</Text>
            )}
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
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
            <Text>{errors.password}</Text>
            )}
            <Button
            onPressIn={handleSubmit}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>

)
}
</Formik >
  );
}
