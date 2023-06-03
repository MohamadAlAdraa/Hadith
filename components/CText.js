import { Text } from "react-native";
import React from "react";

const CText = ({
  children,
  style,
  lineHeight,
  fontSize,
  fontFamily,
  color,
}) => {
  return (
    <Text
      style={[
        {
          fontFamily: fontFamily ? fontFamily : "Amiri-Regular",
          fontSize: fontSize ? fontSize : 18,
          color: color ? color : "black",
          writingDirection: "rtl",
          lineHeight: lineHeight ? lineHeight : 28,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default CText;
