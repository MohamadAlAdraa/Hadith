import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import InputSearch from "../components/InputSearch";
import HadithCard from "../components/HadithCard";

const Search = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <InputSearch />
        </View>
        <View style={styles.listContainer}>
          <View style={styles.innerListCont}>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              showsVerticalScrollIndicator={false}
            >
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
              <HadithCard />
            </ScrollView>
          </View>
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
  innerListCont: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
