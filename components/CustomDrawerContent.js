import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomDrawerContent = ({ props, size, iconColorOnFocus }) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row-reverse", alignItems: "center" }}
          onPress={() => props.navigation.navigate("Search")}
        >
          <MaterialCommunityIcons
            name="book-open-page-variant"
            size={size}
            color="black"
            style={{ marginLeft: 16, marginRight: 8 }}
          />
          <Text style={{ marginRight: 16 }}>تحقق من حديث</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row-reverse", alignItems: "center" }}
          onPress={() => props.navigation.navigate("About")}
        >
          <MaterialCommunityIcons
            name="information"
            size={size}
            color="black"
            style={{ marginLeft: 16, marginRight: 8 }}
          />
          <Text style={{ marginRight: 16 }}>من نحن</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row-reverse", alignItems: "center" }}
          onPress={() => props.navigation.navigate("ContactUs")}
        >
          <MaterialCommunityIcons
            name="bug"
            size={size}
            color="black"
            style={{ marginLeft: 16, marginRight: 8 }}
          />
          <Text style={{ marginRight: 16 }}>أخبر عن خطأ</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
