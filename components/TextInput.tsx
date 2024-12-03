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
import { FormValueType } from "@/app/(tabs)/trade";

interface TextInput extends TextInputProps {
  label: string;
  field: keyof FormValueType;
  value?: string | undefined;
  onChangeText: (val: string) => void;
  buttonsActive?: boolean;
  onFieldUpdate?: (field: keyof FormValueType, isIncrease: boolean) => void;
  popoverActive?: boolean;
}

const TextInput = ({
  label,
  field,
  value,
  onBlur,
  onFocus,
  onChangeText,
  buttonsActive = false,
  onFieldUpdate = () => {},
  popoverActive = false,
}: TextInput) => {
  const themeColor = useThemeColor();

  const [isFocused, setIsFocused] = useState<boolean>(false);
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
      {popoverActive && isFocused && (
        <View style={styles.popoverContainer}>
          <View
            style={{
              backgroundColor: themeColor.backgroundBlack,
              ...styles.popover,
            }}
          >
            <Text
              style={{
                color: themeColor.background,
              }}
              variant="xs"
            >
              ${Number(value).toLocaleString()}
            </Text>
          </View>

          <View
            style={{
              borderTopColor: themeColor.backgroundBlack,
              ...styles.arrow,
            }}
          />
        </View>
      )}
      {buttonsActive && (
        <Pressable
          style={[styles.buttonContainer, styles.buttonLeft]}
          onPress={() => onFieldUpdate(field, false)}
          disabled={Number(value) === 0}
        >
          <AntDesign
            name="minus"
            size={16}
            color={Number(value) !== 0 ? themeColor.icon : themeColor.disabled}
          />
        </Pressable>
      )}
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

      {buttonsActive && (
        <Pressable
          style={[styles.buttonContainer, styles.buttonRight]}
          onPress={() => onFieldUpdate(field, true)}
        >
          <AntDesign name="plus" size={16} color={themeColor.icon} />
        </Pressable>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
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
    left: 2,
  },
  buttonRight: {
    right: 2,
  },
  popoverContainer: {
    position: "absolute",
    top: -30,
    zIndex: 1000,
  },
  popover: {
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 8,
    minWidth: 30,
    alignItems: "center",
    opacity: 0.9,
  },
  arrow: {
    position: "absolute",
    bottom: -6,
    left: "50%",
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 6,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ translateX: -5 }],
    opacity: 0.9,
  },
});
