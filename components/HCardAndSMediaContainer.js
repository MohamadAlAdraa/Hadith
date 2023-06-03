import { StyleSheet, View } from "react-native";
import React from "react";
import HadithCard from "./HadithCard";
import SocialMedia from "./SocialMedia";
import HCardAndSMediaConnection from "./HCardAndSMediaConnection";

const HCardAndSMediaContainer = ({ data, hadithNumber }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inContainer}>
        <HadithCard data={data} hadithNumber={hadithNumber} />
      </View>
      <View style={styles.inContainerCon}>
        <View style={styles.connection}>
          <View style={styles.leftContainerConnection}>
            <HCardAndSMediaConnection />
          </View>
          <View style={styles.rightContainerConnection}>
            <HCardAndSMediaConnection />
          </View>
        </View>
      </View>
      <View style={styles.inContainer}>
        <SocialMedia />
      </View>
    </View>
  );
};

export default HCardAndSMediaContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 40,
  },
  inContainer: {
    flex: 1,
  },
  inContainerCon: {
    flex: 1,
    position: "relative",
  },
  connection: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 1,
  },
  leftContainerConnection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    marginLeft: 12,
  },
  rightContainerConnection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 12,
  },
});
