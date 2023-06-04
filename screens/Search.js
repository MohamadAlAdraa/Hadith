import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import InputSearch from "../components/InputSearch";
import HCardAndSMediaContainer from "../components/HCardAndSMediaContainer";
import { useSelector } from "react-redux";
import colors from "../utils/colors";
import { generateUniqueKey } from "../utils/CONSTS";

const Search = () => {
  const hadithStateLoading = useSelector((state) => state.hadith.loading);
  const hadithStateData = useSelector((state) => state.hadith.data);
  const hadithStateErro = useSelector((state) => state.hadith.error);

  return (
    <BackgroundWrapper>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: 30,
          paddingBottom: 30,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <>
          <View>
            <InputSearch />
          </View>
          {hadithStateLoading ? (
            <ActivityIndicator color={colors.main} size="large" />
          ) : hadithStateData ? (
            <View style={styles.container1}>
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
          ) : hadithStateErro ? (
            <View>
              <Text>Error</Text>
            </View>
          ) : (
            <View style={styles.container}>
              <Text style={styles.text}>
                {`\u2022`}البحث متاح فقط باللغة العربية
              </Text>
              <Text style={styles.text}>
                {`\u2022`}يمكنك البحث بكتابة بعض الكلمات من الحديث
              </Text>
              <Text style={styles.text}>
                {`\u2022`}نتجية البحث تعرض :{" "}
                <Text style={styles.innetText}>
                  الروايات الواردة في كتب الحديث
                </Text>{" "}
                | <Text style={styles.innetText}>الراوي</Text> |{" "}
                <Text style={styles.innetText}>المحدث</Text> |{" "}
                <Text style={styles.innetText}>المصدر</Text> |{" "}
                <Text style={styles.innetText}>خلاصة حكم الحديث</Text>
              </Text>
            </View>
          )}
        </>
      </ScrollView>
    </BackgroundWrapper>
  );
};

export default Search;

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
  },
  innetText: {
    color: colors.golden,
  },
});
