import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import HadithCardTextContent from "./HadithCardTextContent";
import HadithCardInfoContent from "./HadithCardInfoContent";
import HadithCardNumber from "./HadithCardNumber";

const HadithCard = () => {
  // Manage hadith data from redux in this component
  return (
    <View style={styles.card}>
      <View style={styles.cardNumberContainer}>
        <HadithCardNumber />
      </View>
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
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 8,
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 20,
    borderWidth: 1,
    position: "relative",
    borderColor: colors.main,
  },
  cardNumberContainer: {
    position: "absolute",
    top: -40,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
