import { View, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";

const SUN = require("../assets/weather/sun.png");
const CLOUD = require("../assets/weather/cloud.png");
const SNOW = require("../assets/weather/snow.png")
const FOG = require("../assets/weather/fog.png")
const RAIN = require("../assets/weather/rain.png")

export default function WeatherImage({ weather }) {
  function selectImage(weather) {
    if (weather === 113) return SUN;
    else if (weather === 116 || weather === 119 || weather === 122)
      return CLOUD;
    else if (
      weather === 143 ||
      weather === 176 ||
      weather === 176 ||
      weather === 227 ||
      weather === 230
    )
      return SNOW;
    else if (
      weather === 182 ||
      weather === 185 ||
      weather === 200 ||
      weather === 263 ||
      weather === 266 ||
      weather === 281 ||
      weather === 284 ||
      weather === 293 ||
      weather === 296 ||
      weather === 299 ||
      weather === 302 ||
      weather === 305 ||
      weather === 308 ||
      weather === 311
    )
      return RAIN;
    else if (weather === 248 || weather === 260) return FOG;
  }
  return (
    <View style={styles.upperContainer}>
      <Image style={styles.weatherImage} source={selectImage(weather)} />
    </View>
  );
}

const styles = StyleSheet.create({
  weatherImage: {
    width: 300,
    height: 300,
  },
  upperContainer: {
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: "center",
  },
});
