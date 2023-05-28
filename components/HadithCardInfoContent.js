import { StyleSheet, View } from "react-native";
import React from "react";
import HadithCardInfoItem from "./HadithCardInfoItem";
const HadithCardInfoContent = () => {
  return (
    <View style={styles.container}>
      <HadithCardInfoItem label="الراوي" />
      <HadithCardInfoItem label="المحدث" />
      <HadithCardInfoItem label="المصدر" />
      <HadithCardInfoItem label="الصحفة أو الرقم" />
      <HadithCardInfoItem label="خلاصة حكم الحديث" />
    </View>
  );
};

export default HadithCardInfoContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
