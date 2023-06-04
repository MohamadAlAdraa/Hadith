import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const TasbihLoading = () => {
  const texts = ["سبحان الله", "الحمد لله", "لا اله الا الله", "الله أكبر"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{texts[currentIndex]}</Text>
    </View>
  );
};

export default TasbihLoading;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Amiri-Bold",
    fontSize: 24,
  },
});
