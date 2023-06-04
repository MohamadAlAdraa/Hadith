import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import CText from "./CText";
import { useSelector } from "react-redux";

const HadithCardInfoItem = ({ label, labelData }) => {
  const themeState = useSelector((state) => state.theme.morning);

  return (
    <View style={styles.container}>
      <CText
        style={styles.label}
        color={themeState ? colors.main : colors.white}
        fontFamily="Amiri-Bold"
      >
        {label} :
      </CText>

      <CText color={colors.golden} fontFamily="Amiri-Bold">
        {labelData ? labelData : "لا يوجد"}
      </CText>
    </View>
  );
};

export default HadithCardInfoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
    flexWrap: "wrap",
  },
  label: {
    marginRight: 10,
  },
});
