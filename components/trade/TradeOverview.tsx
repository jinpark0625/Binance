import { View, StyleSheet } from "react-native";
import { Button, Text } from "@/components";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { palette } from "@/constants/Colors";
import { TradeType } from "@/app/(tabs)/trade";

interface TradeOverview {
  tradeType: TradeType;
}

const TradeOverview = ({ tradeType }: TradeOverview) => {
  const themeColor = useThemeColor();

  return (
    <>
      <View>
        <View style={styles.container}>
          <Button variant="custom" onPress={console.log}>
            <Text variant="s" weight="light" color="textSecondary">
              Avbl
            </Text>
            <View
              style={{
                borderColor: themeColor.icon,
                ...styles.underline,
              }}
            />
          </Button>
          <Button
            variant="custom"
            onPress={console.log}
            style={styles.buttonContainer}
          >
            <Text variant="s" weight="light">
              0.0000 USDT
            </Text>
            <MaterialIcons name="add-circle" size={16} color={palette.gold} />
          </Button>
        </View>
        <View style={styles.container}>
          <Button variant="custom" onPress={console.log}>
            <Text variant="s" weight="light" color="textSecondary">
              Nax Buy
            </Text>
            <View
              style={{
                borderColor: themeColor.icon,
                ...styles.underline,
              }}
            />
          </Button>
          <Button
            variant="custom"
            onPress={console.log}
            style={styles.buttonContainer}
          >
            <Text variant="s" weight="light">
              0.00000 BTC
            </Text>
          </Button>
        </View>
        <View style={styles.container}>
          <Button variant="custom" onPress={console.log}>
            <Text variant="s" weight="light" color="textSecondary">
              Est. Fee
            </Text>
            <View
              style={{
                borderColor: themeColor.icon,
                ...styles.underline,
              }}
            />
          </Button>
          <Button
            variant="custom"
            onPress={console.log}
            style={styles.buttonContainer}
          >
            <Text variant="s" weight="light">
              0.00075 BTC
            </Text>
          </Button>
        </View>
      </View>
      <Button
        variant={tradeType === "buy" ? "green" : "red"}
        title={tradeType === "buy" ? "Buy BTC" : "Sell BTC"}
        onPress={console.log}
      />
    </>
  );
};

export default TradeOverview;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  underline: {
    marginTop: -1,
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderRadius: 1,
  },
  buttonContainer: { flexDirection: "row", alignItems: "center", gap: 2 },
});
