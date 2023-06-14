import { View, StyleSheet} from "react-native";
import React from "react";
import Navigation from "../components/Navigation";
import WeatherImage from "../components/WeatherImage";
import TemperatureAndDescription from "../components/TemperatureAndDescription";

export default function UpperPart({placeName, localTime, weather, description, temperature}) {
  return (
    <View style={styles.upPart}>
      <Navigation
        placeName={placeName}
        localTime={localTime}
      />
      <WeatherImage weather={weather} />
      <TemperatureAndDescription
        description={description}
        temperature={temperature}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  upPart: {
    padding: 20,
    paddingTop: 80,
    paddingBottom: 40,
    width: "100%",
    backgroundColor: "#0d7bf5",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
