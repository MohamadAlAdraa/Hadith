import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const CustomDrawerItem = ({
  isTabActive,
  tabName,
  onPress,
  iconLabel,
  label,
}) => {
  function isTabActiveHelper() {
    const active = isTabActive(tabName);
    return active;
  }
  function navigateToPickedItem() {
    onPress(tabName);
  }

  return (
    <TouchableOpacity
      style={[
        styles.item,
        isTabActiveHelper() && {
          backgroundColor: colors.activeTabBackg,
          borderColor: colors.activeTabIc,
        },
      ]}
      onPress={navigateToPickedItem}
    >
      <MaterialCommunityIcons
        name={iconLabel}
        size={24}
        color={isTabActiveHelper() ? colors.activeTabIc : "black"}
        style={styles.icon}
      />
      <Text
        style={{
          color: isTabActiveHelper() ? colors.activeTabIc : "black",
          fontFamily: isTabActiveHelper() ? "Amiri-Bold" : "Amiri-Regular",
          fontSize: isTabActiveHelper() ? 18 : 16,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    width: "94%",
    marginVertical: 5,
    alignSelf: "center",
    borderRadius: 10,
  },
  icon: {
    marginLeft: 8,
    marginRight: 32,
  },
});
