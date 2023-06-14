import { StyleSheet, View } from "react-native";
import SwiperWidget from "./swiper/Swiper";

export default function App() {
  return (
      <View style={styles.container}>
        <SwiperWidget />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
