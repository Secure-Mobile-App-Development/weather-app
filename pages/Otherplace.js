import { useEffect, useState } from "react";
import Home from "./Home";
import { TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import getWeather from "../utility/getWeather";

export default function OtherPlace({ data }) {
  console.log("OtherPlace Component Ran");
  const [loading, setLoading] = useState(false)
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState(data);
  async function getCityData() {
    setLoading(true)
    const cityTem = await getWeather(cityName)
    setCityData(cityTem)
    setLoading(false)
  }
  useEffect(() => {
    console.log("Otherplace ue ran");
  });
  return (
    <>
      <View style={{display: "flex", flexDirection: "row", padding: 20, paddingTop: 80, paddingBottom: 0, marginBottom: -40, backgroundColor: "#0d7bf5", zIndex: 1, alignItems:"center"}}>
        
      <Icon name="magnify" color="#fff" size={40} style={{marginRight: 15}}/>
        <TextInput
          placeholder="Enter City name"
          value={cityName}
          onChangeText={setCityName}
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            height: 50,
            fontSize: 35,
            flex: 1,
            borderBottomColor: "#fff",
            paddingBottom: 10,
            borderBottomWidth: 3,
          }}
          onSubmitEditing={getCityData}
        />
      </View>
      {loading ? <></> : <Home data={cityData} /> }
    </>
  );
}
