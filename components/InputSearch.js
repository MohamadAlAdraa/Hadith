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

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  function clear() {
    Keyboard.dismiss();
    console.log("search clear pressed");
    setSearchValue("");
  }

  function searchInputHandler(input) {
    setSearchValue(input);
  }

  function search() {
    Keyboard.dismiss();
    console.log("search icon pressed");
    console.log(searchValue);
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
        placeholder="ابحث بكلمة أو جملة"
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
