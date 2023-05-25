import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import hadithStore from "./redux/index";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import Search from "./screens/Search";
import About from "./screens/About";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={hadithStore}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Search"
            screenOptions={{
              drawerPosition: "right",
            }}
          >
          <Drawer.Screen name="Search" component={Search} />
          <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
          </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
