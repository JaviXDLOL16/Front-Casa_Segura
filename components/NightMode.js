import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MqttContext } from '../services/MqttContext';


const NightMode = () => {

    

    return (
        <View className="flex-row mb-4 justify-center items-center">
            <Text className="text-lg w-[30%]">Sensor de movimiento: </Text>
            <TouchableOpacity className="bg-red-500 py-2.5 px-4 rounded-md w-[140px] items-center">
                <Text className="text-lg text-white">Desactivado</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NightMode