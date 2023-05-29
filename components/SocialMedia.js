import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMedia = () => {
  function shareHandler(appName) {
    console.log("share");
  }
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <SocialMediaIcon iconLabel="content-copy" onPress={shareHandler} />
      </View>
      <View style={styles.leftContainer}>
        <SocialMediaIcon iconLabel="facebook" onPress={shareHandler} />
        <SocialMediaIcon iconLabel="instagram" onPress={shareHandler} />
        <SocialMediaIcon iconLabel="send" onPress={shareHandler} />
        <SocialMediaIcon iconLabel="whatsapp" onPress={shareHandler} />
      </View>
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Updated
    flex: 1, // Added
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Updated
  },
});
