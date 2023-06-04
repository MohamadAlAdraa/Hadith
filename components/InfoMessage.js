import { StyleSheet, View, Text } from "react-native";
import colors from "../utils/colors";

const toastConfig = {
  ERROR: ({ text1 }) => (
    <View style={[styles.container, styles.error]}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  ),
  SUCCESS: ({ text1 }) => (
    <View style={[styles.container, styles.success]}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  ),
  INFO: ({ text1 }) => (
    <View style={[styles.container, styles.info]}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 10,
    writingDirection: "rtl",
    borderLeftWidth: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    paddingLeft: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
  },
  error: {
    borderTopColor: colors.error,
    borderBottomColor: colors.error,
    borderRightColor: colors.error,
    borderLeftColor: colors.error,
  },
  success: {
    borderTopColor: colors.success,
    borderBottomColor: colors.success,
    borderRightColor: colors.success,
    borderLeftColor: colors.success,
  },
  info: {
    borderTopColor: colors.info,
    borderBottomColor: colors.info,
    borderRightColor: colors.info,
    borderLeftColor: colors.info,
  },
  text: {
    fontSize: 18,
    fontFamily: "Amiri-Regular",
    writingDirection: "rtl",
  },
});

export default toastConfig;
