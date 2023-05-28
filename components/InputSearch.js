import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../utils/colors";

const InputSearch = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="ابحث بكلمة أو جملة"
        style={styles.input}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TouchableOpacity>
        <Image
          style={styles.searchIcon}
          resizeMode="contain"
          source={require("../assets/iconSearch.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  searchIcon: {
    width: 40,
    height: 40,
    flex: 1,
  },
  input: {
    flex: 4,
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: "right",
    fontSize: 16,
  },
});
