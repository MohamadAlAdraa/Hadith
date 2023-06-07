import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../utils/colors";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { SharehHadith_API } from "../redux/hadith/shareh-slice";

const HadithExplanation = ({ route }) => {
  const themeState = useSelector((state) => state.theme.morning);
  const sharehDataState = useSelector((state) => state.hadithExp.data);
  const sharehStateLoading = useSelector((state) => state.hadithExp.loading);
  const [shareh, setShareh] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundShareh = sharehDataState.find(
      (item) => item.sharehId === route.params.data.sharhMetadata.id
    );
    if (foundShareh) {
      setShareh((shareh) => (shareh = foundShareh.shareh));
    } else {
      dispatch(SharehHadith_API(route.params.data.sharhMetadata.urlToGetSharh));
    }
  }, [sharehDataState]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          styles.container,
          { backgroundColor: themeState ? colors.white : colors.black },
        ]}
      >
        {sharehStateLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator
              color={themeState ? colors.black : colors.white}
              size="large"
            />
          </View>
        ) : shareh ? (
          <Text
            style={[
              styles.text,
              { color: themeState ? colors.black : colors.white },
            ]}
          >
            {shareh}
          </Text>
        ) : (
          <Text style={styles.errorText}>
            حدث خطأ؛ يبدو أن الشرح غير متوفر...
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default HadithExplanation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 50,
  },
  text: {
    fontFamily: "Amiri-Bold",
    fontSize: 18,
    lineHeight: 35,
    writingDirection: "rtl",
    textAlign: "justify",
  },
  errorText: {
    fontFamily: "Amiri-Regular",
    writingDirection: "rtl",
    color: colors.error,
    fontSize: 18,
  },
});
