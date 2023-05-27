import { StyleSheet, Image, View, Pressable } from "react-native";
import React from "react";

const Logo = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
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
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
