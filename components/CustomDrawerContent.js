import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomDrawerContent = (props) => {
  const activeTabBackgroundColor = "#ddd"; // Customize the background color of the active tab

  const isTabActive = (routeName) => {
    const currentRoute = props.state.routes[props.state.index];
    return currentRoute.name === routeName;
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {/* Custom Drawer Items */}
        <TouchableOpacity
          style={[
            styles.item,
            isTabActive("Search") && {
              backgroundColor: activeTabBackgroundColor,
            },
          ]}
          onPress={() => props.navigation.navigate("Search")}
        >
          <MaterialCommunityIcons
            name="book-open-page-variant"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text>تحقق من الحديث</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.item,
            isTabActive("About") && {
              backgroundColor: activeTabBackgroundColor,
            },
          ]}
          onPress={() => props.navigation.navigate("About")}
        >
          <MaterialCommunityIcons
            name="information"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text>عن التطبيق</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.item,
            isTabActive("ContactUs") && {
              backgroundColor: activeTabBackgroundColor,
            },
          ]}
          onPress={() => props.navigation.navigate("ContactUs")}
        >
          <MaterialCommunityIcons
            name="bug"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text>أخبر عن خطأ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <MaterialCommunityIcons
            name="share"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text>مشاركة التطبيق</Text>
        </TouchableOpacity>
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
  item: {
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    width: "94%",
    marginVertical: 5,
    alignSelf: "center",
    borderRadius: 10,
  },
  icon: {
    marginRight: 8,
    marginLeft: 32,
  },
});
