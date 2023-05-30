import { ScrollView, View } from "react-native";
import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import InputSearch from "../components/InputSearch";
import HCardAndSMediaContainer from "../components/HCardAndSMediaContainer";

const Search = () => {
  return (
    <BackgroundWrapper>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: 30,
          paddingBottom: 110,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <InputSearch />
        </View>
        <View>
          <HCardAndSMediaContainer />
          <HCardAndSMediaContainer />
          <HCardAndSMediaContainer />
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
};

export default Search;
