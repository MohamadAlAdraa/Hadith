import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";

const ContactUs = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text>ContactUs</Text>
      </View>
    </BackgroundWrapper>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
