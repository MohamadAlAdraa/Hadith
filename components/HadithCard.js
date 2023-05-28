import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import HadithCardTextContent from "./HadithCardTextContent";
import HadithCardInfoContent from "./HadithCardInfoContent";
const HadithCard = () => {
  // Manage hadith data from redux in this component
  return (
    <View style={styles.card}>
      <View>
        <HadithCardTextContent />
      </View>
      <View>
        <HadithCardInfoContent />
      </View>
    </View>
  );
};

export default HadithCard;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: colors.main,
  },
});
