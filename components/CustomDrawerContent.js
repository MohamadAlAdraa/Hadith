import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import CustomDrawerItem from "./CustomDrawerItem";
import colors from "../utils/colors";

const CustomDrawerContent = (props) => {
  const isTabActive = (routeName) => {
    const currentRoute = props.state.routes[props.state.index];
    return currentRoute.name === routeName;
  };

  const onPressItemHandler = (routeName) => {
    props.navigation.navigate(routeName);
  };

  const onPressShareHandler = (routeName) => {};

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <CustomDrawerItem
          isTabActive={isTabActive}
          tabName="Search"
          onPress={onPressItemHandler}
          iconLabel="book-open-page-variant"
          label="تحقق من الحديث"
        />
        <CustomDrawerItem
          isTabActive={isTabActive}
          tabName="About"
          onPress={onPressItemHandler}
          iconLabel="information"
          label="عن التطبيق"
        />
        <CustomDrawerItem
          isTabActive={isTabActive}
          tabName="ContactUs"
          onPress={onPressItemHandler}
          iconLabel="bug"
          label="أخبر عن خطأ"
        />
        <CustomDrawerItem
          isTabActive={isTabActive}
          tabName="Share"
          onPress={onPressShareHandler}
          iconLabel="share"
          label="مشاركة التطبيق"
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    flex: 1,
    marginTop: 20,
  },
});
