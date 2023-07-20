import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { View, Text } from 'react-native'

import { MqttContext } from '../services/MqttContext';


const AC = ({ buttonOnTopic, buttonOffTopic }) => {

    const { publishMessage } = useContext(MqttContext);

    return (
        <View className=" items-center mb-4">
            <View className="border-2 border-[#4B9EF4] w-44 h-16 rounded-2xl flex-row justify-evenly items-center bg-white overflow-hidden">
                <View
                    className=" w-[30%] items-center justify-center h-[100%]"
                >
                    <Entypo name="air" size={24} color="black" />
                </View>
                <TouchableOpacity
                    className=" w-[35%] items-center justify-center h-[100%] active:bg-[#4B9EF4]"
                    onPress={() => {
                        publishMessage(buttonOnTopic, "on")
                    }}
                >
                    <Text className="font-bold text-xl">ON</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className=" w-[35%] items-center justify-center h-[100%] active:bg-[#4B9EF4]"
                    onPress={() => {
                        publishMessage(buttonOffTopic, "off")
                    }}
                >
                    <Text className="font-bold text-xl">OFF</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AC