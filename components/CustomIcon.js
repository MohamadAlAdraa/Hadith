import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const CustomIcon = ({
  onPress,
  iconLabel,
  iconColor,
  label,
  containerStyle,
  textColor = "black",
  textSize = 16,
  isDisabled,
  iconSize = 24,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}
      disabled={isDisabled}
    >
      <MaterialCommunityIcons
        name={iconLabel}
        size={iconSize}
        color={isDisabled ? colors.disabled : iconColor}
      />
      {label && (
        <Text
          style={[
            styles.label,
            {
              color: isDisabled ? colors.disabled : textColor,
              fontSize: textSize,
            },
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
  },
  label: {
    marginLeft: 8,
    fontFamily: "Amiri-Bold",
  },
});
