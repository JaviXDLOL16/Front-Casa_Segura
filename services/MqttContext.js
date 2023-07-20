import React, { createContext, useEffect, useState } from 'react';
import MQTT from '@openrc/react-native-mqtt';
import { URL_MQTT, PORT_MQTT } from '@env'

export const MqttContext = createContext();

export const MqttProvider = ({ children }) => {
  const [mqttClient, setMqttClient] = useState({});
  const [receivedTemperature, setReceivedTemperature] = useState('');
  const [receivedAirJson, setReceivedAirJson] = useState()
  const [receivedAlarm, setReceivedAlarm] = useState()
  const [receivedAlarmJson, setReceivedAlarmJson] = useState()
  const [receivedNightModeJson, setReceivedNightModeJson] = useState()

  useEffect(() => {

    const setupMQTT = () => {
      // create mqtt client
      const client = MQTT.connect(URL_MQTT, {
        port: PORT_MQTT,
        protocol: 'ws',
        reconnectPeriod: 30 * 1000,
        qos: 2,
        cleanSession: false, // Mantener la sesión
        clientId: 'expo'
      });

      setMqttClient(client);

      client.on('closed', function () {
        console.log('mqtt event closed');
        // Manejar la reconexión aquí, por ejemplo, intentar reconectar en 5 segundos
        setTimeout(setupMQTT, 5000);
      });

      client.on('error', function (msg) {
        console.log('mqtt event error', msg);
        // Manejar la reconexión aquí, por ejemplo, intentar reconectar en 5 segundos
        setTimeout(setupMQTT, 5000);
      });

      client.on('connect', function () {
        console.log('connected mqtt');
        client.subscribe('/homeSecure/esp32/temperature');
        client.subscribe('/homeSecure/esp32/alarm/json');
        client.subscribe('/homeSecure/esp32/alarm');
        client.subscribe('/homeSecure/esp32/air/json');
        client.subscribe('/homeSecure/esp32/nightMode/json');
      });

      client.on('message', function (topic, msg, packet) {
        if (topic === '/homeSecure/esp32/temperature') {
          let data = msg.toString();
          //console.log('mqtt event message', data);
          setReceivedTemperature(data);
        }

        if (topic === '/homeSecure/esp32/air/json'){
          let data = JSON.parse(msg.toString());
          console.log('mqtt event message', data);
          setReceivedAirJson(data)
        }

        if (topic === '/homeSecure/esp32/alarm'){
          let data = JSON.parse(msg.toString());
          console.log('mqtt event message', data);
          setReceivedAlarm(data)
        }

        if (topic === '/homeSecure/esp32/alarm/json'){
          let data = JSON.parse(msg.toString());
          console.log('mqtt event message', data);
          setReceivedAlarmJson(data)
        }

        if (topic === '/homeSecure/esp32/nightMode/json'){
          let data = JSON.parse(msg.toString());
          console.log('mqtt event message', data);
          setReceivedNightModeJson(data)
        }
      });
    };

    setupMQTT();

  }, []);

  const publishMessage = (topic, message) => {
    if (mqttClient) {
      mqttClient.publish(topic, message);
    }
  };


  return (
    <MqttContext.Provider value={{ mqttClient, receivedTemperature, receivedAirJson, receivedAlarm, receivedAlarmJson, publishMessage }}>
      {children}
    </MqttContext.Provider>
  );
};
