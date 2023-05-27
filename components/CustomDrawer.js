import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Search from "../screens/Search";
import About from "../screens/About";
import ContactUs from "../screens/ContactUs";
import CustomDrawerContent from "./CustomDrawerContent";
import HeaderButton from "./HeaderButton";
import colors from "../utils/colors";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const navigation = useNavigation();

  const openDrawerHandler = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const closeDrawerHandler = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const toggleThemeHandler = () => {
    // use redux state to change the card color and background
  };
  return (
    <Drawer.Navigator
      initialRouteName="Search"
      drawerContent={(props) => (
        <CustomDrawerContent
          defaultProps={props}
          onPress={closeDrawerHandler}
        />
      )}
      screenOptions={{
        drawerPosition: "right",
        headerTitleAlign: "center",
        headerRight: () => (
          <HeaderButton
            onPress={openDrawerHandler}
            style={styles.menuIcon}
            iconLabel="menu"
          />
        ),
        headerLeft: () => (
          <HeaderButton
            onPress={toggleThemeHandler}
            style={styles.themeIcon}
            iconLabel="theme-light-dark"
          />
        ),
        headerTitleStyle: {
          fontSize: 16,
          color: colors.main,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: "الصفحة الرئيسية",
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerTitle: "عن التطبيق",
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          headerTitle: "أخبر عن خطأ",
        }}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  menuIcon: {
    marginRight: 18,
  },
  themeIcon: {
    marginLeft: 18,
  },
});
