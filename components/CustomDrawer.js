import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Search from "../screens/Search";
import About from "../screens/About";
import ContactUs from "../screens/ContactUs";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ size, iconColorOnFocus }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Search"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerTitle: "",
      }}
    >
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
