import { StyleSheet, Text } from "react-native";
import React from "react";
import ViewMoreText from "react-native-view-more-text";
import ViewML from "./ViewML";

const HadithCardTextContent = () => {
  function renderViewMore(onPress) {
    return (
      <ViewML label="عرض المزيد" iconLabel="chevron-down" onPress={onPress} />
    );
  }
  function renderViewLess(onPress) {
    return <ViewML label="عرض أقل" iconLabel="chevron-up" onPress={onPress} />;
  }
  return (
    <ViewMoreText
      numberOfLines={3}
      renderViewMore={renderViewMore}
      renderViewLess={renderViewLess}
      textStyle={{ textAlign: "justify" }}
    >
      <Text style={styles.textContainer}>
        إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا
        نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا، أَوْ إِلَى
        امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ
      </Text>
    </ViewMoreText>
  );
};

export default HadithCardTextContent;

const styles = StyleSheet.create({
  textContainer: {
    writingDirection: "rtl",
    lineHeight: 30,
    fontFamily: "Amiri-Regular",
    fontSize: 18,
  },
});
