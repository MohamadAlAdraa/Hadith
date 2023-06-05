import {
  ScrollView,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import React, { useEffect } from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import InputSearch from "../components/InputSearch";
import HCardAndSMediaContainer from "../components/HCardAndSMediaContainer";
import { useSelector } from "react-redux";
import colors from "../utils/colors";
import { MESSAGE_TYPE, generateUniqueKey, showToast } from "../utils/CONSTS";
import TasbihLoading from "../components/TasbihLoading";
import InitialSearchPageContent from "../components/InitialSearchPageContent";

const Search = () => {
  const hadithStateLoading = useSelector((state) => state.hadith.loading);
  const hadithStateData = useSelector((state) => state.hadith.data);
  const hadithStateError = useSelector((state) => state.hadith.error);

  useEffect(() => {
    if (hadithStateError) {
      showToast(MESSAGE_TYPE.ERROR, "حدث خطأ؛ تأكد من الاتصال بالانترنت.");
    }
  }, [hadithStateError]);

  return (
    <BackgroundWrapper>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
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
          ) : hadithStateData ? (
            <View style={styles.listContainer}>
              {hadithStateData.map((item, idx) => {
                return (
                  <HCardAndSMediaContainer
                    key={item.hadithId ? item.hadithId : generateUniqueKey(9)}
                    data={item}
                    hadithNumber={idx}
                  />
                );
              })}
            </View>
          ) : (
            <InitialSearchPageContent />
          )}
        </>
      </ScrollView>
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
});
