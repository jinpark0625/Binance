import { Dimensions, View, StyleSheet } from "react-native";
import { Text } from "@/components";
import MockData from "@/data/chart.json";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { CandlestickChart, LineChart } from "react-native-wagmi-charts";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

const { width, height } = Dimensions.get("screen");

const clamp = (val: number, min: number, max: number) => {
  return Math.min(Math.max(val, min), max);
};

const CandleChart = () => {
  const themeColor = useThemeColor();

  const scale = useSharedValue(1.4);
  const startScale = useSharedValue(1.4);

  const translateX = useSharedValue(0);
  const startTranslateX = useSharedValue(0);

  const pan = Gesture.Pan()
    .onStart(() => {
      startTranslateX.value = translateX.value;
    })
    .onUpdate((event) => {
      if (scale.value > 1) {
        translateX.value = startTranslateX.value + event.translationX;
      }
    })
    .runOnJS(true);

  const pinch = Gesture.Pinch()
    .onStart(() => {
      startScale.value = scale.value;
    })
    .onUpdate((event) => {
      scale.value = clamp(
        startScale.value * event.scale,
        0.5,
        Math.min(width / 100, height / 100)
      );
    })
    .runOnJS(true);

  const composed = Gesture.Simultaneous(pinch, pan);

  const boxAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { scale: scale.value }],
  }));

  const lineData = MockData.map((item) => ({
    timestamp: item.timestamp,
    value: item.close,
  }));

  return (
    <>
      <View>
        <View
          style={{
            borderBottomColor: themeColor.border,
            marginTop: 16,
            ...styles.headerContainer,
          }}
        >
          <Text variant="xs" weight="light" color="textSecondary">
            Time
          </Text>
          <Text variant="xs" weight="light" color="textSecondary">
            15m
          </Text>
          <Text variant="xs" weight="light" color="textSecondary">
            1h
          </Text>
          <Text variant="xs" weight="light" color="textSecondary">
            4h
          </Text>
          <Text variant="xs" weight="light" color="textSecondary">
            1d
          </Text>
          <Text variant="xs" weight="light" color="textSecondary">
            1w
          </Text>
          <Text variant="xs" weight="light" color="textSecondary">
            Depth
          </Text>
        </View>
        <View
          style={{
            ...styles.headerContainer,
            paddingVertical: 4,
            borderBottomColor: themeColor.border,
          }}
        >
          <Text variant="xxs" weight="light" staticColor="gold">
            EMA(7): 0.0000004505
          </Text>
          <Text variant="xxs" weight="light" staticColor="green">
            EMA(25): 0.00003952
          </Text>
          <Text variant="xxs" weight="light" staticColor="red">
            EMA(99): 0.0000004582
          </Text>
        </View>
      </View>

      <GestureHandlerRootView>
        <GestureDetector gesture={composed}>
          <Animated.View style={boxAnimatedStyles}>
            <View
              style={{
                width: width,
                height: height,
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <View
                  key={`h-${i}`}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: i * 100,
                    height: 1,
                    backgroundColor: themeColor.border,
                  }}
                />
              ))}

              {Array.from({ length: 8 }).map((_, i) => (
                <View
                  key={`v-${i}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: i * 50,
                    width: 1,
                    backgroundColor: themeColor.border,
                  }}
                />
              ))}
            </View>
            <CandlestickChart.Provider data={MockData}>
              <CandlestickChart>
                <LineChart.Path color="rgba(255, 165, 0, 0.8)" width={2} />
                <CandlestickChart.Candles />
                <CandlestickChart.Tooltip />
              </CandlestickChart>
            </CandlestickChart.Provider>
            <LineChart.Provider data={lineData}>
              <LineChart style={StyleSheet.absoluteFill}>
                <LineChart.Path color="rgba(255, 165, 0, 0.8)" width={1} />
              </LineChart>
            </LineChart.Provider>
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </>
  );
};

export default CandleChart;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 4,
    gap: 16,
    borderBottomWidth: 1,
  },
});
