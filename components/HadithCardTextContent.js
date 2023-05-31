import React from "react";
import ViewMoreText from "react-native-view-more-text";
import ViewML from "./ViewML";
import CText from "./CText";

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
      <CText lineHeight={30}>
        إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا
        نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا، أَوْ إِلَى
        امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ
      </CText>
    </ViewMoreText>
  );
};

export default HadithCardTextContent;
