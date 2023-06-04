import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import colors from "../utils/colors";

const HeaderButton = ({ onPress, iconLabel, style, color = colors.main }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name={iconLabel}
        size={26}
        color={color}
        style={style}
      />
    </TouchableOpacity>
  );
};

export default HeaderButton;
