import Svg, { Rect } from "react-native-svg";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { palette } from "@/constants/Colors";

interface PriceSortIcon {
  varinat?: number;
}

const PriceSortIcon = ({ variant = 0 }) => {
  const themeColor = useThemeColor();
  const variantLabels = ["dual", "up", "down"];
  const currentVariant = variantLabels[variant];

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {currentVariant === "dual" ? (
        <>
          <Rect
            x="5.20001"
            y="5"
            width="6"
            height="3.5"
            fill={themeColor.icon}
          />
          <Rect x="13" y="5" width="6" height="6" fill={palette.red} />
          <Rect x="13" y="12.8999" width="6" height="6" fill={palette.green} />
          <Rect
            x="5.20001"
            y="10.2"
            width="6"
            height="3.5"
            fill={themeColor.icon}
          />
          <Rect
            x="5.20001"
            y="15.3999"
            width="6"
            height="3.5"
            fill={themeColor.icon}
          />
        </>
      ) : (
        <>
          <Rect
            x="5.20001"
            y="5"
            width="6"
            height="3.5"
            fill={themeColor.icon}
          />
          <Rect
            x="13"
            y="5"
            width="6"
            height="13.9"
            fill={currentVariant === "up" ? palette.red : palette.green}
          />
          <Rect
            x="5.20001"
            y="10.2"
            width="6"
            height="3.5"
            fill={themeColor.icon}
          />
          <Rect
            x="5.20001"
            y="15.3999"
            width="6"
            height="3.5"
            fill={themeColor.icon}
          />
        </>
      )}
    </Svg>
  );
};

export default PriceSortIcon;
