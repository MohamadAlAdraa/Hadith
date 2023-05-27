import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";

const About = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text>About Us</Text>
      </View>
    </BackgroundWrapper>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
