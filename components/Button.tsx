import { ReactNode } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import Text from "./Text";
import { palette } from "@/constants/Colors";

interface Button extends PressableProps {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "green" | "red" | "custom";
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const Button = ({
  title,
  onPress,
  disabled = false,
  variant = "primary",
  style,
  children,
}: Button) => {
  const isCustom = variant === "custom";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        !isCustom && styles.container,
        !isCustom && styles[variant],
        style,
      ]}
    >
      {title ? (
        <Text staticColor={variant === "primary" ? "black" : "white"}>
          {title}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: palette.primary,
  },
  green: {
    backgroundColor: palette.green,
  },
  red: {
    backgroundColor: palette.red,
  },
});
