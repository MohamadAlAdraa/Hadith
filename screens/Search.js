import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import InputSearch from "../components/InputSearch";

const Search = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <InputSearch />
        </View>
        <View style={styles.listContainer}>
          <Text>Salam</Text>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 5,
  },
});
