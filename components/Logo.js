import { StyleSheet, Image, View, Pressable } from "react-native";
import React from "react";

const Logo = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.header}>
        <Image source={require("../assets/logo11.png")} style={styles.logo} />
      </View>
    </Pressable>
  );
};

export default Logo;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },
});
