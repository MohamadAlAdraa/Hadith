import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import hadithStore from "./redux/index";
import Test from "./components/Test";

export default function App() {
  return (
    <Provider store={hadithStore}>
      <View style={styles.container}>
        <Test
          userInput={"أَخَذَ ابْنُ مسعودٍ قَوْمًا ارْتَدُّوا عَنِ الإسلامِ"}
        />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
