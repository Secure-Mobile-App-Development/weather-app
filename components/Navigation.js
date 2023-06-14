import { View, Text } from 'react-native'
import React from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Navigation({placeName, localTime}) {
  return (
    <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "700", fontSize: 35, color: "#fff" }}>
              {placeName}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 15, color: "#fff" }}>
              Today, {localTime}{" "}
            </Text>
          </View>
          <Icon name="dots-horizontal-circle" color="white" size={40} />
        </View>
  )
}