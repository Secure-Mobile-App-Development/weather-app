import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DataWidget from "./DataWidget";

export default function LowerPart({ values }) {
  return (
    <View style={styles.down}>
      <Text style={styles.downText}>Weather Now</Text>
      <View style={styles.weatherData}>
        {[0, 1].map((e) => {
          return (
            <DataWidget
              key={e}
              style={{ backgroundColor: "#0000ff" }}
              values={values[e]}
              side={e}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  down: {
    padding: 20,
    paddingTop: 30,
  },
  downText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 40,
  },
  weatherData: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
  },
});
