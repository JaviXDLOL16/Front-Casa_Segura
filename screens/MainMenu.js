
import {Text, View,SafeAreaView } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback, useEffect,useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';


import SectionIndicator from '../components/SectionIndicator';
import Wheather from '../components/Weather';
import DashboardButton from '../components/DashboardButton';
import Task from '../components/Task';
import { ScrollView } from 'native-base';


const OPEN_WEATHER_MAP_API_KEY = 'cf94987af5ec0c9d23b084489d6d5d28'; // Reemplaza con tu clave de API
const GOOGLE_MAPS_API_KEY = 'AIzaSyAZwrSq95phl6DV2ulGjvQKUHPAbqJmpME'; // Reemplaza con tu clave de API

export default function MainMenu() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [placeDetails, setPlaceDetails] = useState(null);
//Letras
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        MulishBold: require("../assets/fonts/Mulish-Bold.ttf"),
        MulishLight: require("../assets/fonts/Mulish-Light.ttf"),
      });
    

      useEffect(() => {
        (async () => {
          try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              console.log('Permiso de ubicación denegado');
              return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
    
            // Obtener el nombre del lugar utilizando la API de Google Maps
            let response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${GOOGLE_MAPS_API_KEY}`
            );
            let data = await response.json();
    
            if (data.results && data.results.length > 0) {
              setPlaceDetails(parsePlaceDetails(data.results[0]));
    
              // Obtener la información meteorológica de acuerdo a la longitud y latitud
              const weatherResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_MAP_API_KEY}`
              );
              const weatherData = await weatherResponse.json();
    
              setWeatherData(weatherData);
            }
          } catch (error) {
            console.log('Error al obtener la ubicación o los datos meteorológicos:', error);
          }
        })();
      }, []);

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

      const handleButtonPress = (onPress) => {
        navigation.navigate(onPress);
      };


      //Clima y lugar


    
      // Función para obtener los detalles del lugar a partir del resultado de la API de Google Maps
      const parsePlaceDetails = (result) => {
        let placeDetails = {
          municipio: '',
          estado: '',
          pais: ''
        };
    
        const addressComponents = result.address_components;
        for (let i = 0; i < addressComponents.length; i++) {
          const types = addressComponents[i].types;
          if (types.includes('locality')) {
            placeDetails.municipio = addressComponents[i].long_name;
          } else if (types.includes('administrative_area_level_1')) {
            placeDetails.estado = addressComponents[i].long_name;
          } else if (types.includes('country')) {
            placeDetails.pais = addressComponents[i].long_name;
          }
        }
    
        return placeDetails;
      };
    
  return (

 <View className="flex-1 bg-[#F0F0F2] items-center justify-between" onLayout={onLayout}>

<SectionIndicator
Texto={"Menu principal"}
/>
{weatherData && placeDetails ? (
<Wheather
Lugar={placeDetails.municipio}
Max={weatherData.main.temp_max.toFixed(0)-268}
Min={weatherData.main.temp_min.toFixed(0)-276}
Temperatura={weatherData.main.temp.toFixed(0)-273}
/>

) : (
  <Wheather
Lugar={"--------"}
Max={"--°"}
Min={"--°"}
Temperatura={"--°"}
/>
)}

<View className="h-[60%] justify-center">
   <DashboardButton
onPress={() => handleButtonPress('Movements')}
Datos="Movimientos"
Icono="body"
/>

<DashboardButton
onPress={() => handleButtonPress('Temperature')}
Datos="Temperatura"
Icono="partly-sunny"
/>

<DashboardButton
onPress={() => handleButtonPress('Gas')}
Datos="Monitor de humo"
Icono="flame"
/> 

</View>

<Task
/>


 </View>

  );
}

