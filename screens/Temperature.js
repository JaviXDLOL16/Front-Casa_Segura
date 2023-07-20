import { Text, View, ScrollView,  } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState, useContext } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";



import SectionIndicator from '../components/SectionIndicator';
import Task from '../components/Task';
import Circle from '../components/Circle';
import Graphic from '../components/Graphic';

import { MqttContext } from '../services/MqttContext';
import AC from '../components/AC';
import Stadistic from '../components/Stadistic';

export default function Temperature() {


  const { receivedTemperature } = useContext(MqttContext);
  const [statsData, StatsuserData] = useState(null);
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

  useEffect(() => {

    // Clean up the listener on unmount

  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  useEffect(() => {
    // Realizar la petición GET a la API
    axios.get('https://api.example.com/users')
    StatsuserData.then(response => {
        // La respuesta contiene los datos de los usuarios
        (response.data);
      })
      .catch(error => {
        console.log('Error al obtener los datos:', error);
      });
  }, []);

  const temp = [
    { time: '0:00', temperature: 27 },
    { time: '2:00', temperature: 22 },
    { time: '4:00', temperature: 24 },
    { time: '6:00', temperature: 28 },
    { time: '8:00', temperature: 32 },
    { time: '10:00', temperature: 16 },
    // Agrega más datos según sea necesario
  ];

  return (

    <View className="flex-1 bg-[#F0F0F2] items-center" onLayout={onLayout}>
      
      <SectionIndicator
        Texto={"Temperatura"}
      />

      <ScrollView className="w-[94%]">
        <Circle
          Informacion={"Temperatura Interior"}
          Datos={`${receivedTemperature}°`}
          TextColor='#4B9EF4'
          outline={true}
        />

        <AC buttonOnTopic={"/homeSecure/esp32/air"} buttonOffTopic={"/homeSecure/esp32/air"}  />

        <Graphic
          temp={temp}
        />
        <Stadistic
                  Sensor={1}
                  Movimientos={2}
                  Fecha={"12-07-2023"}
                  Hora={"12:55 a.m."}
        />
      </ScrollView>



      <Task></Task>
    </View>

  );
}
