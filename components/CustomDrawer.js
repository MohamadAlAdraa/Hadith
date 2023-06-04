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
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../redux/theme/theme-slice";
const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const navigation = useNavigation();
  const dispath = useDispatch();
  const themeState = useSelector((state) => state.theme.morning);

  const openDrawerHandler = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const closeDrawerHandler = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const toggleThemeHandler = () => {
    dispath(themeActions.toggleTheme());
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
        headerLeft: () => (
          <HeaderButton
            onPress={openDrawerHandler}
            style={styles.menuIcon}
            iconLabel="menu"
          />
        ),
        headerRight: () => (
          <HeaderButton
            onPress={toggleThemeHandler}
            style={styles.themeIcon}
            iconLabel="theme-light-dark"
            color={themeState ? colors.sun : colors.moon}
          />
        ),
        headerTitleStyle: {
          color: colors.main,
          fontFamily: "Amiri-Bold",
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
  themeIcon: {
    marginRight: 18,
  },
  menuIcon: {
    marginLeft: 18,
  },
});
