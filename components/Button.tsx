import { Pressable } from "react-native";
import Text from "./Text";

interface Button {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button = ({ title, onPress, disabled = false }: Button) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
