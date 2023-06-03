import React from "react";
import ViewMoreText from "react-native-view-more-text";
import ViewML from "./ViewML";
import CText from "./CText";

const HadithCardTextContent = ({ data }) => {
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
      <CText lineHeight={30}>{data.hadith}</CText>
    </ViewMoreText>
  );
};

export default HadithCardTextContent;
