import { View, StyleSheet, Platform } from "react-native";
import { Button, Text } from "@/components";
import { palette } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { TradeType } from "@/app/(tabs)/trade";
import Arrow from "@/components/icons/Arrow";

interface TradeTab {
  tradeType: TradeType;
  onPress: (type: TradeType) => void;
}

const TradeTab = ({ tradeType, onPress }: TradeTab) => {
  const themeColor = useThemeColor();

  return (
    <View style={styles.buySellTabButtonContainer}>
      <View
        style={{
          borderColor: themeColor.border,
          ...styles.buySellTabButtonBorder,
        }}
      />
      <Button
        variant="custom"
        onPress={() => onPress("buy")}
        style={styles.buySellTabButton}
      >
        <View
          style={{
            backgroundColor: tradeType === "buy" ? palette.green : undefined,
            right: 12,
            ...styles.buySellTabButtonBg,
          }}
        />
        <View
          style={{
            ...Platform.select({
              ios: {
                borderLeftWidth: 12,
                borderTopWidth: 11,
                borderBottomWidth: 11,
                right: 0,
                borderColor:
                  tradeType === "buy" ? palette.green : "transparent",
              },
            }),
            ...styles.arrow,
          }}
        />
        <Text
          variant={Platform.OS === "android" ? "s" : "m"}
          staticColor={tradeType === "buy" ? "white" : undefined}
          color={tradeType !== "buy" ? "textSecondary" : undefined}
        >
          Buy
        </Text>
        {Platform.OS === "android" && tradeType === "buy" && (
          <View
            style={{
              position: "absolute",
              right: 0,
            }}
          >
            <Arrow color={palette.green} direction="right" />
          </View>
        )}
      </Button>
      <Button
        variant="custom"
        onPress={() => onPress("sell")}
        style={styles.buySellTabButton}
      >
        <View
          style={{
            backgroundColor: tradeType === "sell" ? palette.red : undefined,
            left: 12,
            ...styles.buySellTabButtonBg,
          }}
        />
        <View
          style={{
            ...Platform.select({
              ios: {
                borderRightWidth: 12,
                borderTopWidth: 11,
                borderBottomWidth: 11,
                left: 0,
                borderColor: tradeType === "sell" ? palette.red : "transparent",
              },
            }),

            ...styles.arrow,
          }}
        />
        <Text
          variant={Platform.OS === "android" ? "s" : "m"}
          staticColor={tradeType === "sell" ? "white" : undefined}
          color={tradeType !== "sell" ? "textSecondary" : undefined}
        >
          Sell
        </Text>
        {Platform.OS === "android" && tradeType === "sell" && (
          <View
            style={{
              position: "absolute",
              left: 0,
            }}
          >
            <Arrow color={palette.red} direction="left" />
          </View>
        )}
      </Button>
    </View>
  );
};

export default TradeTab;

const styles = StyleSheet.create({
  buySellTabButtonContainer: {
    height: 26,
    flexDirection: "row",
    alignItems: "center",
  },
  buySellTabButtonBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 26,
    borderWidth: 1,
    borderRadius: 6,
  },
  buySellTabButton: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    overflow: "hidden",
  },
  buySellTabButtonBg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  arrow: {
    position: "absolute",
    width: 0,
    height: "100%",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
});
