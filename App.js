import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import hadithStore from "./redux/index";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./components/CustomDrawer";
import { I18nManager } from "react-native";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={hadithStore}>
        <NavigationContainer>
          <CustomDrawer />
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
