import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const BackgroundWrapper = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.5 }}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
