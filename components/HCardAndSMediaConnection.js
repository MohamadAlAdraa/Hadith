import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../utils/colors";

const HCardAndSMediaConnection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.line}></View>
    </View>
  );
};

export default HCardAndSMediaConnection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 2,
    height: 10,
    backgroundColor: colors.main,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: colors.main,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.main,
  },
});
