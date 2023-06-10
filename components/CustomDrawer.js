import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../screens/About";
import ContactUs from "../screens/ContactUs";
import Favorites from "../screens/Favorites";
import CustomDrawerContent from "./CustomDrawerContent";
import colors from "../utils/colors";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../redux/theme/theme-slice";
import HomeDrawer from "./HomeDrawer";
import HeaderButton from "./HeaderButton";

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
      initialRouteName="Home"
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
        headerTitleStyle: {
          color: colors.main,
          fontFamily: "Amiri-Bold",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          headerShown: false,
          openDrawerHandler: openDrawerHandler,
          toggleThemeHandler: toggleThemeHandler,
          themeState: themeState,
          styles: styles,
        }}
      >
        {(props) => (
          <HomeDrawer
            {...props}
            openDrawerHandler={openDrawerHandler}
            toggleThemeHandler={toggleThemeHandler}
            themeState={themeState}
            styles={styles}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerTitle: "أحاديثك المفضلة",
          headerRight: () => (
            <HeaderButton
              onPress={toggleThemeHandler}
              style={styles.themeIcon}
              iconLabel="theme-light-dark"
              color={themeState ? colors.sun : colors.moon}
            />
          ),
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
  goBackIcon: {
    marginRight: 12,
  },
  themeIcon: {
    marginRight: 18,
  },
  themeIconleft: {
    marginLeft: 18,
  },
  menuIcon: {
    marginLeft: 18,
  },
});
