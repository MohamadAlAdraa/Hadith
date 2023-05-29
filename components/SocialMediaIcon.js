import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const SocialMediaIcon = ({ iconLabel, onPress }) => {
  function shareHandlerCall() {
    onPress(iconLabel);
  }
  return (
    <TouchableOpacity onPress={shareHandlerCall} style={styles.iconContainer}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons
          name={iconLabel}
          size={36}
          color={colors.main}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SocialMediaIcon;

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 5,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
  },
});
