import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";

const HadithCardInfoItem = ({ label, labelData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} :</Text>
      <Text style={styles.labelData}>{labelData ? labelData : "فارغ"}</Text>
    </View>
  );
};

export default HadithCardInfoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
  },
  label: {
    marginRight: 10,
    color: colors.main,
    fontWeight: "bold",
    fontSize: 16,
  },
  labelData: {
    color: colors.golden,
    fontWeight: "bold",
  },
});
