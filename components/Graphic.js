import React, { useEffect, useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {Text, View,ScrollView,Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";


export default function Graphic({temp}) {
  const [showData, setShowData] = useState(false);
  const [selectedDataIndex, setSelectedDataIndex] = useState(null);
  const horizontalOffset = -10; // Ajusta el desplazamiento horizontal


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


  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(33, 78, 52, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: true, // optional
    horizontalLabelRotation: 45, // Rotación de las etiquetas del eje X
    
  };

  const data = {
    labels: ["12 a.m.                ", " 4 a.m.                ", "8 a.m.         ", "12 p.m.    ", " 4 p.m.", "        8 p.m.", "          12 a.m." ],
    datasets: [
      {
        data:  temp.map(item => item.temperature),
        color: (opacity = 0) => `rgba(75, 158, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  };


  const handleDataPointClick = (data, index) => {
    setSelectedDataIndex(index);
    setShowData(true);

    setTimeout(() => {
      setShowData(false);
      setSelectedDataIndex(null);
    }, 5000);
  };

  const renderDotContent = ({ x, y, index }) => {
    if (!showData || selectedDataIndex === null || selectedDataIndex !== index) {
      return null;
    }

    return (
      <View
        style={{
          position: "absolute",
          top: y + 5,
          left: x -8,
          alignItems: "center",
        }}
      >
        <Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                {data.datasets[0].data[index]}°
              </Text> 
      </View>
    );
  };


return (
<View  className="bg-white rounded-md shadow-sm justify-start">
    <View className="pb-[5%] pt-[2%] pl-[2%]">
  <Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Temperatura
              </Text>      
    </View>

<LineChart
  data={data}
   width={Dimensions.get("window").width + horizontalOffset}
  height={230}
  chartConfig={chartConfig}
  fromZero={true}
  yAxisSuffix={" °"}
  onDataPointClick={({ value, index }) => handleDataPointClick(data, index)}
  renderDotContent={renderDotContent}
  bezier
  
/>
<View className="items-center pb-[2%]">
<Text
                style={{
                  fontFamily: "MulishLight",
                  fontSize: 14,
                  color: "#565759",
                  textShadowColor: "#565759",
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2,
                }}
              >
                Hora
              </Text>    
</View>

</View>

  );
}