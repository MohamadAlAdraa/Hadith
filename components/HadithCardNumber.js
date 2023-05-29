import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";

const HadithCardNumber = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/cardNumber.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>100</Text>
      </View>
    </View>
  );
};

export default HadithCardNumber;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
  },
  textContainer: {
    position: "absolute",
    top: -22,
    left: 0,
    right: -5,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
