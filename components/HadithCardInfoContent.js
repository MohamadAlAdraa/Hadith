import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import HadithCardInfoItem from "./HadithCardInfoItem";
import colors from "../utils/colors";
import CustomIcon from "./CustomIcon";
import { useSelector } from "react-redux";

const HadithCardInfoContent = ({ data, navigation }) => {
  const themeState = useSelector((state) => state.theme.morning);
  const [addedToFav, setAddedToFav] = useState(false);

  function showHadithExp() {
    navigation.navigate("HadithExplanation", {
      data: data,
    });
  }

  function addToFavorites() {
    setAddedToFav((addedToFav) => (addedToFav = !addedToFav));
    // to be continued.
  }
  return (
    <View style={styles.container}>
      <HadithCardInfoItem label="الراوي" labelData={data.rawi} />
      <HadithCardInfoItem label="المحدث" labelData={data.mohdith} />
      <HadithCardInfoItem label="المصدر" labelData={data.book} />
      <HadithCardInfoItem
        label="الصحفة أو الرقم"
        labelData={data.numberOrPage}
      />
      <HadithCardInfoItem label="خلاصة حكم الحديث" labelData={data.grade} />

      <View style={styles.buttonsContainer}>
        <CustomIcon
          label="شرح الحديث"
          iconLabel="comment-text-outline"
          iconColor={colors.golden}
          onPress={showHadithExp}
          containerStyle={styles.buttonStyle}
          textColor={themeState ? colors.main : colors.neon}
          isDisabled={!data.hasSharhMetadata}
        />
        <CustomIcon
          label="أضف الى المفضلة"
          iconLabel={addedToFav ? "heart" : "heart-outline"}
          iconColor={colors.golden}
          onPress={addToFavorites}
          containerStyle={styles.buttonStyle}
          textColor={themeState ? colors.main : colors.neon}
        />
      </View>
    </View>
  );
};

export default HadithCardInfoContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonStyle: {
    borderWidth: 0,
  },
});
