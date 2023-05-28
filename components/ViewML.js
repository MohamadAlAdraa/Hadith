import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const ViewML = ({ label, iconLabel, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name={iconLabel} size={20} color={colors.main} />
      <Text style={styles.labelText}>{label}</Text>
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
    fontWeight: "bold",
    color: colors.main,
  },
});
