import { ScrollView } from "react-native";
import UpperPart from "../widgets/UpperPart";
import LowerPart from "../widgets/LowerPart";


export default function Home({data}) {
  return (
    <ScrollView style={{flex: 1, width: "100%"}}>
      <UpperPart
        placeName={data.location.name}
        weather={data.current.weather_code}
        localTime={data.location.localtime}
        temperature={data.current.temperature}
        description={data.current.weather_descriptions[0]}
      />
      <LowerPart 
        values={[[
            data.current.temperature,
            data.current.wind_speed,
            data.current.uv_index,
            data.current.visibility,
        ], [
            data.current.feelslike,
            data.current.humidity,
            data.current.cloudcover,
            data.current.pressure,
        ]]}
      />
    </ScrollView>
  );
}
