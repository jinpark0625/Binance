import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Tab from "./Tab";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { palette } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from "react-native-reanimated";

type Route = {
  key: string;
  name: string;
  params?: object | undefined;
};

export const INDICATOR_WIDTH = 16;

const TabBar = ({ state, descriptors, navigation }: MaterialTopTabBarProps) => {
  const themeColor = useThemeColor();

  const translateX = useSharedValue(0);
  const [toValue, setToValue] = useState<number>(0);

  useEffect(() => {
    translateX.value = withSpring(toValue, {
      damping: 10,
      mass: 1,
      stiffness: 100,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
    });
  }, [state, toValue]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <>
      <View
        style={{ borderBottomColor: themeColor.border, ...styles.container }}
      >
        {state.routes.map((route: Route, index: number) => {
          const { options } = descriptors[route.key];

          const label = options.title || route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Tab
              isFocused={isFocused}
              key={`tab_${index}`}
              label={label}
              onPress={onPress}
              setToValue={setToValue}
            />
          );
        })}
      </View>
      <Animated.View
        style={[
          {
            width: 16,
            backgroundColor: palette.primary,
          },
          animatedStyle,
          styles.indicator,
        ]}
      />
    </>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 12,
    paddingBottom: 8,
    gap: 16,
    borderBottomWidth: 1,
  },
  indicator: {
    marginTop: -3,
    height: 3,
  },
});
