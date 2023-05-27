import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";

const Search = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    </BackgroundWrapper>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
