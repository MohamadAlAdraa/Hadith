import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
const InitialSearchPageContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`\u2022`}البحث متاح فقط باللغة العربية.</Text>
      <Text style={styles.text}>
        {`\u2022`}يمكنك البحث بكتابة بعض الكلمات من الحديث.
      </Text>
      <Text style={styles.text}>{`\u2022`}النتائج ستظهر لك 30 حديث.</Text>
      <Text style={styles.text}>
        {`\u2022`}نتجية البحث تعرض :{" "}
        <Text style={styles.innetText}>الروايات الواردة في كتب الحديث</Text> |{" "}
        <Text style={styles.innetText}>الراوي</Text> |{" "}
        <Text style={styles.innetText}>المحدث</Text> |{" "}
        <Text style={styles.innetText}>المصدر</Text> |{" "}
        <Text style={styles.innetText}>خلاصة حكم الحديث.</Text>
      </Text>
    </View>
  );
};

export default InitialSearchPageContent;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 15,
    writingDirection: "rtl",
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: colors.main,
  },
  text: {
    fontFamily: "Amiri-Bold",
    fontSize: 20,
    writingDirection: "rtl",
  },
  innetText: {
    color: colors.golden,
  },
});
