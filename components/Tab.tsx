import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Text from "./Text";
import { INDICATOR_WIDTH } from "./CustomTabBar";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

interface Tab {
  isFocused: boolean;
  label: string;
  onPress: () => void;
  setToValue: (params: number) => void;
}

const Tab = ({ isFocused, label, onPress, setToValue }: Tab) => {
  const themeColor = useThemeColor();
  const [layout, setLayout] = useState<any>(null);

  useEffect(() => {
    if (isFocused && layout) {
      const centerPosition =
        layout.x + (layout.width / 2 - INDICATOR_WIDTH / 2);

      setToValue(centerPosition);
    }
  }, [isFocused, layout, setToValue]);

  const onLayout = (e: any) => {
    const { x, width } = e.nativeEvent.layout;
    setLayout({ x, width });
  };

  return (
    <TouchableOpacity onPress={onPress} onLayout={onLayout}>
      <Text
        style={{
          color: isFocused ? themeColor.backgroundBlack : themeColor.icon,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;
