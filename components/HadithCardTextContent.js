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
        كل شيء نسبي في الحياة ، ومهما ساءت الأمور فليست شرا كلها ، ولن تجد الناس
        جميعا يجمعون على أمر واحد ، خاصة إذا تعلق الأمر بالفنون التعبيرية ودورها
        في تثقيف الإنسان والتعبير عن قضاياه ، ومن هذه الفنون الأدب والسينما .
        فما العلاقة بينهما ؟ وكيف يؤثران في شخصية الإنسان ؟
      </Text>
    </ViewMoreText>
  );
};

export default HadithCardTextContent;

const styles = StyleSheet.create({
  textContainer: {
    writingDirection: "rtl",
    lineHeight: 24,
  },
});
