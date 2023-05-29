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
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.searchIcon}
            resizeMode="center"
            source={require("../assets/iconSearch.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 40,
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  input: {
    flex: 5,
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: "right",
    fontSize: 16,
  },
});
