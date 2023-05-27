import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import colors from "../utils/colors";

const HeaderButton = ({ onPress, iconLabel, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name={iconLabel}
        size={26}
        color={colors.main}
        style={style}
      />
    </TouchableOpacity>
  );
};

export default HeaderButton;
