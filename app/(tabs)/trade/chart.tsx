import { View, StyleSheet } from "react-native";
import { CandleChart, Text } from "@/components";
import { useRecoilValue } from "recoil";
import { activeSymbolState } from "@/atom/activeSymbolAtom";
import { palette } from "@/constants/Colors";

const Chart = () => {
  const activeSymbol = useRecoilValue(activeSymbolState);

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text variant="xl" weight="medium" staticColor="green">
            {activeSymbol?.price || "98,130.00"}
          </Text>
          <View style={[styles.gapS, styles.row]}>
            <Text variant="s" weight="light">
              ≈$ {activeSymbol?.price || "98,130.00"}
            </Text>
            <Text variant="s" staticColor="green">
              +0.05%
            </Text>
          </View>
          <View
            style={{
              backgroundColor: palette.goldLight,
              ...styles.infoContainer,
            }}
          >
            <Text variant="xs" weight="light" staticColor="gold">
              POW ∣ Vol ∣ Price Protection {`›`}
            </Text>
          </View>
        </View>
        <View style={[styles.gap, styles.row]}>
          <View style={styles.gap}>
            <View>
              <Text variant="xxs" weight="light" color="textSecondary">
                24h Hight
              </Text>
              <Text variant="xxs" weight="light">
                98,130.00
              </Text>
            </View>
            <View>
              <Text variant="xxs" weight="light" color="textSecondary">
                24h Vol(BTC)
              </Text>
              <Text variant="xxs" weight="light">
                98,130.00
              </Text>
            </View>
          </View>
          <View style={styles.gap}>
            <View>
              <Text variant="xxs" weight="light" color="textSecondary">
                24h Low
              </Text>
              <Text variant="xxs" weight="light">
                98,130.00
              </Text>
            </View>
            <View>
              <Text variant="xxs" weight="light" color="textSecondary">
                24h Vol(USDT)
              </Text>
              <Text variant="xxs" weight="light">
                98,130.00
              </Text>
            </View>
          </View>
        </View>
      </View>
      <CandleChart />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  gapS: {
    gap: 4,
  },
  gap: {
    gap: 8,
  },
  infoContainer: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
});
