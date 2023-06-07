import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import HadithCardTextContent from "./HadithCardTextContent";
import HadithCardInfoContent from "./HadithCardInfoContent";
import HadithCardNumber from "./HadithCardNumber";
import { useSelector } from "react-redux";
const HadithCard = ({ data, hadithNumber, navigation }) => {
  const themeState = useSelector((state) => state.theme.morning);

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: themeState ? colors.white : colors.black },
      ]}
    >
      <View style={styles.cardNumberContainer}>
        <HadithCardNumber hadithNumber={hadithNumber} />
      </View>
      <View>
        <HadithCardTextContent data={data} />
      </View>
      <View>
        <HadithCardInfoContent data={data} navigation={navigation} />
      </View>
    </View>
  );
};

export default HadithCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 12,
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
