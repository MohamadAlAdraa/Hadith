import React from "react";
import Search from "../screens/Search";
import HadithExplanation from "../screens/HadithExplanation";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../utils/colors";
import HeaderButton from "./HeaderButton";
import { useSelector } from "react-redux";

const Tab = createStackNavigator();

const HomeDrawer = ({
  openDrawerHandler,
  toggleThemeHandler,
  themeState,
  styles,
  navigation,
}) => {
  const hadithStateData = useSelector((state) => state.hadith.data);

  function goBackHome() {
    navigation.goBack();
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.main,
          fontFamily: "Amiri-Bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: "الصفحة الرئيسية",
          headerLeft: () => (
            <HeaderButton
              onPress={openDrawerHandler}
              style={styles.menuIcon}
              iconLabel="menu"
            />
          ),
          headerRight: () =>
            hadithStateData && hadithStateData.length > 0 ? (
              <HeaderButton
                onPress={toggleThemeHandler}
                style={styles.themeIcon}
                iconLabel="theme-light-dark"
                color={themeState ? colors.sun : colors.moon}
              />
            ) : null,
        }}
      />
      <Tab.Screen
        name="HadithExplanation"
        component={HadithExplanation}
        options={{
          headerTitle: "شرح الحديث",
          headerLeft: () => (
            <HeaderButton
              onPress={toggleThemeHandler}
              style={styles.themeIconleft}
              iconLabel="theme-light-dark"
              color={themeState ? colors.sun : colors.moon}
            />
          ),
          headerRight: () => (
            <HeaderButton
              onPress={goBackHome}
              style={styles.goBackIcon}
              iconLabel="arrow-left"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeDrawer;
