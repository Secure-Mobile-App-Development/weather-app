import { View, Text } from 'react-native'
import React from 'react'

export default function TemperatureAndDescription({temperature, description}) {
  return (
    <View>
    <Text style={{ color: "#fff", fontSize: 100, fontWeight: "900" }}>
      {temperature}°C
    </Text>
    <Text style={{ color: "#fff", fontSize: 35, fontWeight: "400" }}>
      {description}
    </Text>
  </View>
  )
}