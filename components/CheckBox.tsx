import { View, StyleProp, ViewStyle } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

interface CheckBox {
  isChecked?: boolean;
  style?: StyleProp<ViewStyle>;
}

const CheckBox = ({ isChecked = false, style }: CheckBox) => {
  const themeColor = useThemeColor();
  return (
    <View style={style}>
      {isChecked ? (
        <MaterialIcons
          name="check-box"
          size={18}
          color={themeColor.backgroundBlack}
        />
      ) : (
        <MaterialIcons
          name="check-box-outline-blank"
          size={18}
          color={themeColor.icon}
        />
      )}
    </View>
  );
};

export default CheckBox;
