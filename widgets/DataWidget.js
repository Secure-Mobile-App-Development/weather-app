import { View, StyleSheet } from "react-native";
import React from "react";
import staticData from "../assets/static-data/widget.json";
import DisplayComponents from "../components/DisplayComponents";

export default function DataWidget({ values, side }) {
  return (
    <View style={styles.datarow}>
      {staticData.data[side].map((e, idx) => {
        return (<DisplayComponents
          key={idx}
          iconName={e.iconName}
          propertyName={e.propertyName}
          propertyValue={values[idx]}
          propertyUnit={e.propertyUnit}
        />)
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  datarow: {
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
    flexGrow: 1,
  },
});
