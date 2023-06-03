import { StyleSheet, View } from "react-native";
import React from "react";
import HadithCardInfoItem from "./HadithCardInfoItem";
const HadithCardInfoContent = ({ data }) => {
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
});
