import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import OtherPlace from "../pages/Otherplace";
import data from "../assets/dummy-data/weather-data.json";
import Home from "../pages/Home";
import getWeather from "../utility/getWeather";


export default function SwiperWidget() {
  const [loadingLocalData, setLoadingLocalData] = useState(true);
  const [localData, setlocalData] = useState(data);
  const [loadingCity1, setLoadingCity1] = useState(true);
  const [city1, setCity1] = useState(data);
  const [loadingCity2, setLoadingCity2] = useState(true);
  const [city2, setCity2] = useState(data);

  useEffect(() => {
    (async () => {
      setLoadingLocalData(true);
      const lData = await getWeather("Mumbai");
      setlocalData(lData);
      setLoadingLocalData(false);

      setLoadingCity1(true);
      const C1 = await getWeather("London");
      setCity1(C1);
      setLoadingCity1(false);

      setLoadingCity2(true);
      const C2 = await getWeather("Pune");
      setCity2(C2);
      setLoadingCity2(false);
    })();
  }, []);

  return (
    <Swiper
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={{
        bottom: 0,
      }}
      loop={true}
      index={1}
    >
      {loadingCity1 ? <></> : <OtherPlace data={city1} />}
      {loadingLocalData ? <></> : <Home data={localData} />}
      {loadingCity2 ? <></> : <OtherPlace data={city2} />}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: "#ccc",
    width: "33%",
    height: 2,
    borderRadius: 0,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: "40%",
    height: 3,
    borderRadius: 3,
  },
});
