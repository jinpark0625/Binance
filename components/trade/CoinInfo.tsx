import { View, StyleSheet } from "react-native";
import { Button, Text } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

interface CoinInfo {
  symbol?: string;
  onPress: () => void;
  openBottomSheet: (type: string) => void;
}

const CoinInfo = ({ symbol, onPress, openBottomSheet }: CoinInfo) => {
  const themeColor = useThemeColor();

  return (
    <View style={styles.container}>
      <View>
        <Button
          variant="custom"
          onPress={() => openBottomSheet("search")}
          style={styles.titleContainer}
        >
          <Text variant="lg" weight="medium">
            {/* title */}
            {`${symbol}`}/USDT
          </Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color={themeColor.backgroundBlack}
          />
        </Button>
        <Text variant="s" staticColor="green">
          {/* percent? */}
          +0.05%
        </Text>
      </View>
      <View style={styles.row}>
        <Button variant="custom" style={styles.marginRight} onPress={onPress}>
          <MaterialIcons
            name="candlestick-chart"
            size={24}
            color={themeColor.icon}
          />
        </Button>
        <Button variant="custom" onPress={() => {}}>
          <MaterialIcons name="more-horiz" size={24} color={themeColor.icon} />
        </Button>
      </View>
    </View>
  );
};

export default CoinInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: -4,
  },
  row: {
    flexDirection: "row",
  },
  marginRight: {
    marginRight: 12,
  },
});
