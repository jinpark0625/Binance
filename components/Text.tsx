import { Text as RNText } from "react-native";

interface Text {
  children: string;
}

export const Text = ({ children }: Text) => {
  return <RNText>{children}</RNText>;
};

export default Text;
