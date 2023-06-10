import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BackgroundWrapper from "../components/BackgroundWrapper";

const Favorites = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    </BackgroundWrapper>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
