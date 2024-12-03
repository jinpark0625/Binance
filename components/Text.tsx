import { ReactNode } from "react";
import {
  Text as RNText,
  type TextProps,
  TextStyle,
  StyleSheet,
} from "react-native";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { palette } from "@/constants/Colors";

interface Text extends TextProps {
  variant?: "xxs" | "xs" | "s" | "m" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "bold";
  align?: "left" | "center" | "right";
  color?: "textPrimary" | "textSecondary";
  staticColor?: "primary" | "green" | "red" | "white" | "gold" | "black";
  children: ReactNode;
}

const Text = ({
  variant = "m",
  weight = "normal",
  align = "left",
  color = "textPrimary",
  staticColor,
  style,
  children,
  ...props
}: Text) => {
  const themeColor = useThemeColor();

  const textStyles: TextStyle = {
    ...styles[variant],
    ...styles[weight],
    ...styles[align],
    color: staticColor ? styles[staticColor]?.color : themeColor[color],
  };

  return (
    <RNText style={[textStyles, style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  xxs: {
    fontSize: 10,
    lineHeight: 14,
  },
  xs: {
    fontSize: 12,
    lineHeight: 18,
  },
  s: {
    fontSize: 13,
    lineHeight: 21,
  },
  m: {
    fontSize: 15,
    lineHeight: 24,
  },
  lg: {
    fontSize: 17,
    lineHeight: 27,
  },
  xl: {
    fontSize: 27,
    lineHeight: 34,
  },
  light: {
    fontWeight: 300,
  },
  normal: {
    fontWeight: 400,
  },
  medium: {
    fontWeight: 500,
  },
  bold: {
    fontWeight: 700,
  },
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  primary: {
    color: palette.primary,
  },
  green: {
    color: palette.green,
  },
  red: {
    color: palette.red,
  },
  gold: {
    color: palette.gold,
  },
  white: {
    color: palette.white,
  },
  black: {
    color: palette.gray[900],
  },
});
