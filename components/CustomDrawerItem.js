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
          fontWeight: isTabActiveHelper() ? "bold" : "normal",
          fontSize: isTabActiveHelper() ? 16 : 14,
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
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 10,
    // borderWidth: 1,
    width: "94%",
    marginVertical: 5,
    alignSelf: "center",
    borderRadius: 10,
  },
  icon: {
    marginRight: 8,
    marginLeft: 32,
  },
});