import { useState, useRef, useEffect } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import Text from "./Text";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Easing,
} from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";

interface TextInput extends TextInputProps {
  label: string;
  value?: string | undefined;
  onChangeText: (val: string) => void;
  onDecrease: () => void;
  onIncrease: () => void;
}

const TextInput = ({
  label,
  value,
  onBlur,
  onFocus,
  onChangeText,
  onDecrease,
  onIncrease,
}: TextInput) => {
  const themeColor = useThemeColor();

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<RNTextInput>(null);

  const animation = useSharedValue(0);

  const labelAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(animation.value, [0, 1], [0, -10]),
        },
        {
          scale: interpolate(animation.value, [0, 1], [1, 0.7]),
        },
      ],
    };
  });

  useEffect(() => {
    animation.value = withTiming(isFocused || !!value ? 1 : 0, {
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    });
  }, [isFocused, value]);

  return (
    <View
      style={{
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        style={[styles.buttonContainer, styles.buttonLeft]}
        onPress={onDecrease}
      >
        <AntDesign name="minus" size={16} color={themeColor.icon} />
      </Pressable>
      <RNTextInput
        style={{
          backgroundColor: themeColor.fieldBackground,
          color: isFocused ? themeColor.textPrimary : "transparent",
          ...styles.input,
        }}
        ref={inputRef}
        value={value}
        keyboardType="decimal-pad"
        onChangeText={onChangeText}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
      />

      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <View style={[styles.valueContainer]}>
          <Text
            variant="s"
            style={{
              ...styles.input,
              opacity: isFocused ? 0 : 1,
              paddingTop: 16,
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {value}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View style={[styles.labelContainer, labelAnimation]}>
          <Text color="textSecondary">{label}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <Pressable
        style={[styles.buttonContainer, styles.buttonRight]}
        onPress={onIncrease}
      >
        <AntDesign name="plus" size={16} color={themeColor.icon} />
      </Pressable>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    // width: "100%",
    width: 200,
    height: 40,
    paddingTop: 12,
    paddingHorizontal: 26,
    borderRadius: 8,
    textAlign: "center",
  },
  valueContainer: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  labelContainer: {
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    zIndex: 10,
    width: 24,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLeft: {
    left: 0,
  },
  buttonRight: {
    right: 0,
  },
});
