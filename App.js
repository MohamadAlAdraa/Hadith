import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import hadithStore from "./redux/index";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./components/CustomDrawer";
import { I18nManager } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function App() {
  const [fontsLoaded] = useFonts({
    "Amiri-Regular": require("./assets/fonts/Amiri-Regular.ttf"),
    "Amiri-Bold": require("./assets/fonts/Amiri-Bold.ttf"),
    "Amiri-Italic": require("./assets/fonts/Amiri-Italic.ttf"),
    "Amiri-BoldItalic": require("./assets/fonts/Amiri-BoldItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Provider store={hadithStore}>
        <NavigationContainer>
          <CustomDrawer />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
