import {
  ScrollView,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import InputSearch from "../components/InputSearch";
import HCardAndSMediaContainer from "../components/HCardAndSMediaContainer";
import { useSelector } from "react-redux";
import colors from "../utils/colors";
import { MESSAGE_TYPE, generateUniqueKey, showToast } from "../utils/CONSTS";
import TasbihLoading from "../components/TasbihLoading";
import InitialSearchPageContent from "../components/InitialSearchPageContent";
import CustomIcon from "../components/CustomIcon";

const Search = ({ navigation }) => {
  const hadithStateLoading = useSelector((state) => state.hadith.loading);
  const hadithStateData = useSelector((state) => state.hadith.data);
  const hadithStateError = useSelector((state) => state.hadith.error);
  const scrollViewRef = useRef(null);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    if (hadithStateError) {
      showToast(MESSAGE_TYPE.ERROR, "حدث خطأ؛ تأكد من الاتصال بالانترنت.");
    }
  }, [hadithStateError]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    setShowScrollUp(scrollPosition > 0);
  };
  const handleScrollUp = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <BackgroundWrapper>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={5}
      >
        <>
          <InputSearch />
          {hadithStateLoading ? (
            <>
              <ActivityIndicator color={colors.black} size="large" />
              <Text style={{ fontFamily: "Amiri-Regular" }}>
                يرجى الانتظار جاري البحث...
              </Text>
              <TasbihLoading />
            </>
          ) : !hadithStateData ? (
            <InitialSearchPageContent />
          ) : hadithStateData.length > 0 ? (
            <View style={styles.listContainer}>
              {hadithStateData.map((item, idx) => {
                return (
                  <HCardAndSMediaContainer
                    key={item.hadithId ? item.hadithId : generateUniqueKey(9)}
                    data={item}
                    hadithNumber={idx}
                    navigation={navigation}
                  />
                );
              })}
            </View>
          ) : (
            <Text
              style={{
                fontFamily: "Amiri-Bold",
                fontSize: 20,
                color: colors.error,
              }}
            >
              لا يوجد نتائح في البحث؛ حاول صياغة نص البحث...
            </Text>
          )}
        </>
      </ScrollView>
      {showScrollUp && (
        <CustomIcon
          iconLabel="arrow-up"
          label={null}
          onPress={handleScrollUp}
          containerStyle={styles.scrollUpButton}
          iconColor={colors.white}
          iconSize={20}
        />
      )}
    </BackgroundWrapper>
  );
};

export default Search;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    width: "100%",
    marginTop: 30,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  listContainer: {
    width: "90%",
  },
  scrollUpButton: {
    width: 26,
    height: 26,
    backgroundColor: colors.main,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 14,
    left: 5,
  },
});
