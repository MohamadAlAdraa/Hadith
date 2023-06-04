import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { useSelector } from "react-redux";

const ViewML = ({ label, iconLabel, onPress }) => {
  const themeState = useSelector((state) => state.theme.morning);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={iconLabel}
        size={20}
        color={themeState ? colors.main : colors.neon}
      />
      <Text
        style={[
          styles.labelText,
          { color: themeState ? colors.main : colors.neon },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ViewML;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontFamily: "Amiri-Bold",
    // color: colors.main,
  },
});
