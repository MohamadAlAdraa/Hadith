import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Search from "../screens/Search";
import About from "../screens/About";
import ContactUs from "../screens/ContactUs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ size, iconColorOnFocus }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Search"
      screenOptions={{
        drawerPosition: "right",
        drawerLabelStyle: {
          textAlign: "right",
        },
        headerTitle: "",
      }}
    >
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{
          drawerLabel: "تحقق من حديث",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={size}
              color={focused ? iconColorOnFocus : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          drawerLabel: "أخبر عن خطأ",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="bug"
              size={size}
              color={focused ? iconColorOnFocus : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerLabel: "عن التطبيق",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="information"
              size={size}
              color={focused ? iconColorOnFocus : "black"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
