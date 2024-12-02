import { View, StyleSheet } from "react-native";
import { Button, Text } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

const CoinInfo = () => {
  const themeColor = useThemeColor();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text variant="lg" weight="medium">
            {/* title */}
            BTC/USDT
          </Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color={themeColor.backgroundBlack}
          />
        </View>
        <Text variant="s" staticColor="green">
          {/* percent? */}
          +0.05%
        </Text>
      </View>
      <View style={styles.row}>
        <Button
          variant="custom"
          style={styles.marginRight}
          onPress={console.log}
        >
          <MaterialIcons
            name="candlestick-chart"
            size={24}
            color={themeColor.icon}
          />
        </Button>
        <Button variant="custom" onPress={console.log}>
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
