import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import colors from "../utils/colors";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { validate } from "../utils/InputSearchValidation";
import { VALIDATION_STATE, MESSAGE_TYPE } from "../utils/CONSTS";
import { useDispatch } from "react-redux";
import { SearchHadith_API } from "../redux/hadith/hadith-slice";

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  function clear() {
    Keyboard.dismiss();
    console.log("search clear pressed");
    setSearchValue((oldSeacrchValue) => (oldSeacrchValue = ""));
  }

  function searchInputHandler(input) {
    setSearchValue((oldSeacrchValue) => (oldSeacrchValue = input));
  }

  const showToast = (type, text1) => {
    Toast.show({
      type: type,
      text1: text1,
    });
  };

  function search() {
    Keyboard.dismiss();
    const vr = validate(searchValue);
    switch (vr) {
      case VALIDATION_STATE.EMPTY:
        console.log("empty");
        setSearchValue((oldSeacrchValue) => (oldSeacrchValue = ""));
        showToast(MESSAGE_TYPE.ERROR, "الرجاء كتابة كلمات من الحديث للبحث.");
        break;
      case VALIDATION_STATE.LANGUAGE:
        setSearchValue((oldSeacrchValue) => (oldSeacrchValue = ""));
        showToast(MESSAGE_TYPE.ERROR, "عذرًا، البحث متاح فقط باللغة العربية.");
        break;
      case VALIDATION_STATE.RANGE:
        setSearchValue((oldSeacrchValue) => (oldSeacrchValue = ""));
        showToast(MESSAGE_TYPE.ERROR, "البحث يتطلب كتابة كلمتين على الأقل.");
        break;
      case VALIDATION_STATE.VALID:
        dispatch(SearchHadith_API(searchValue));
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.outerContainerSearch} onPress={search}>
        <Image
          style={styles.searchIcon}
          resizeMode="center"
          source={require("../assets/iconSearch.png")}
        />
      </Pressable>
      <TextInput
        placeholder="ابحث..."
        style={styles.input}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
        value={searchValue}
        onChangeText={searchInputHandler}
      />
      <Pressable style={styles.outerContainerClear} onPress={clear}>
        <View style={styles.innerContainerClear}>
          <MaterialCommunityIcons name="close" size={12} color={colors.white} />
        </View>
      </Pressable>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    borderWidth: 1,
    borderColor: colors.main,
    backgroundColor: colors.activeTabBackg,
    borderRadius: 10,
  },
  input: {
    flex: 5,
    writingDirection: "rtl",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    borderRightColor: colors.main,
    backgroundColor: "white",
    borderLeftWidth: 1,
    textAlign: "right",
    borderRightWidth: 1,
    borderLeftColor: colors.main,
    borderRightColor: colors.main,
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
  outerContainerSearch: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  outerContainerClear: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainerClear: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
  },
});
