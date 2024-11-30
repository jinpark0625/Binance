import {
  Text as RNText,
  type TextProps,
  TextStyle,
  StyleSheet,
} from "react-native";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

interface Text extends TextProps {
  variant?: "xxs" | "xs" | "s" | "m" | "lg";
  color?: "textPrimary" | "textSecondary";
  children: string;
}

const Text = ({
  variant = "m",
  color = "textPrimary",
  style,
  children,
}: Text) => {
  const themeColor = useThemeColor({}, color);

  const textStyles: TextStyle = {
    ...styles[variant],
    color: themeColor,
  };

  return <RNText style={[textStyles, style]}>{children}</RNText>;
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
    fontSize: 14,
    lineHeight: 21,
  },
  m: {
    fontSize: 16,
    lineHeight: 24,
  },
  lg: {
    fontSize: 18,
    lineHeight: 27,
  },
});
