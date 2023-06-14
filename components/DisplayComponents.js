import { View, Text } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function DisplayComponents({
  iconName,
  propertyName,
  propertyValue,
  propertyUnit,
}) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
      }}
    >
      <Icon name={iconName} color={"#ccc"} size={40} />
      <View>
        <Text style={{ color: "#ccc", fontSize: 15 }}>{propertyName}</Text>
        <Text style={{ color: "#fff", fontSize: 30, fontWeight: "600" }}>
          {propertyValue}
          {propertyUnit}
        </Text>
      </View>
    </View>
  );
}
