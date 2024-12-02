import { ReactNode, useCallback } from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
  SharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface BottomSheet {
  isOpen: SharedValue<boolean>;
  toggleSheet: () => void;
  duration: number;
  children: ReactNode;
}

const clamp = (val: number, min: number, max: number) => {
  return Math.min(Math.max(val, min), max);
};

const WINDOW_HEIGHT = Dimensions.get("window").height;

const BottomSheet = ({
  isOpen,
  toggleSheet,
  duration = 200,
  children,
}: BottomSheet) => {
  const themeColor = useThemeColor();
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration })
  );

  const translateY = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);

  const scrollTo = useCallback((destination: number) => {
    translateY.value = withTiming(destination, { duration }, () => {
      if (destination === height.value) {
        translateY.value = 0;
      }
    });
  }, []);

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationY.value = translateY.value;
    })
    .onUpdate((event) => {
      const maxTranslateY = height.value * 0.8;

      translateY.value = clamp(
        prevTranslationY.value + event.translationY,
        0,
        maxTranslateY
      );
    })
    .onEnd((event) => {
      const closeThreshold = height.value * 0.3;
      if (translateY.value > closeThreshold || event.velocityY > 500) {
        scrollTo(height.value);
        toggleSheet();
      } else {
        scrollTo(0);
      }
    })
    .runOnJS(true);

  const sheetStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
            translateY.value > 0
              ? translateY.value
              : progress.value * 2 * height.value,
        },
      ],
    };
  });

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  return (
    <>
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <TouchableOpacity style={styles.flex} onPress={toggleSheet} />
      </Animated.View>
      <GestureDetector gesture={pan}>
        <Animated.View
          onLayout={(event) => {
            height.value = event.nativeEvent.layout.height;
          }}
          style={[
            {
              backgroundColor: themeColor.background,
              ...styles.sheet,
            },
            sheetStyle,
          ]}
        >
          <View style={styles.handleContainer}>
            <View
              style={{ backgroundColor: themeColor.icon, ...styles.handle }}
            />
          </View>

          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  sheet: {
    paddingTop: 6,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    maxHeight: WINDOW_HEIGHT * 0.9,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  flex: {
    flex: 1,
  },
  handleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  handle: {
    width: 40,
    height: 4,
    marginBottom: 12,
    borderRadius: 4,
  },
});
