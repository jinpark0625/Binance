import { forwardRef, RefObject, useState } from "react";
import { View, StyleSheet, LayoutChangeEvent, Platform } from "react-native";
import { Button, CheckBox, Text, TextInput } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { FormValueType, CheckboxType } from "@/app/(tabs)/trade";
import { useRecoilValue } from "recoil";
import { filterState } from "@/atom/filterStateAtom";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";

interface TradeForm {
  isChecked: CheckboxType;
  toggleCheckBox: (field: keyof CheckboxType) => void;
  formValues: FormValueType;
  handleInputChange: (field: keyof FormValueType, value: string) => void;
  openBottomSheet: (contentType: string) => void;
  handleInputUpdate: (field: keyof FormValueType, isIncrease: boolean) => void;
}

const HANDLE_WIDTH = 16;
const MARKER_SIZE = 8;
const MARKERS = [0, 0.25, 0.5, 0.75, 1];
const TRACK_PADDING = 2;
const MARKER_INSET = 4;

const TradeForm = forwardRef(
  (
    {
      isChecked,
      toggleCheckBox,
      formValues,
      handleInputChange,
      openBottomSheet,
      handleInputUpdate,
    }: TradeForm,
    ref
  ) => {
    const themeColor = useThemeColor();
    const selectedOrderOption = useRecoilValue(filterState);

    const [trackWidth, setTrackWidth] = useState(0);

    const offset = useSharedValue(0);

    const MAX_VALUE = trackWidth - HANDLE_WIDTH - 2 * TRACK_PADDING;

    const getMarkerPosition = (percentage: number) => {
      const availableWidth = trackWidth - 2 * TRACK_PADDING - 2 * MARKER_INSET;
      return (
        availableWidth * percentage +
        TRACK_PADDING +
        MARKER_INSET -
        MARKER_SIZE / 2
      );
    };

    const handleLayout = (event: LayoutChangeEvent) => {
      const width = event.nativeEvent.layout.width;
      setTrackWidth(width);
    };

    const pan = Gesture.Pan()
      .simultaneousWithExternalGesture(ref as RefObject<ScrollView>)
      .onChange((event) => {
        const newValue = offset.value + event.changeX;
        offset.value = Math.max(0, Math.min(newValue, MAX_VALUE));
      });

    const sliderStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: offset.value }, { rotate: "45deg" }],
      };
    });

    const progressStyle = useAnimatedStyle(() => {
      return {
        width: offset.value + HANDLE_WIDTH / 2,
        backgroundColor: themeColor.backgroundBlack,
      };
    });

    const makerStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: themeColor.backgroundBlack,
      };
    });

    return (
      <>
        <Button
          variant="custom"
          onPress={() => openBottomSheet("orderOption")}
          style={{
            backgroundColor: themeColor.fieldBackground,
            ...styles.infoButton,
          }}
        >
          <MaterialIcons name="error" size={16} color={themeColor.icon} />
          <Text variant="s">{selectedOrderOption.orderOption}</Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={20}
            color={themeColor.textSecondary}
          />
        </Button>
        <TextInput
          label="Price (USDT)"
          field="price"
          value={formValues["price"]}
          onChangeText={(val: string) => handleInputChange("price", val)}
          onFieldUpdate={handleInputUpdate}
          buttonsActive
          popoverActive
        />
        <TextInput
          label="Amount (BTC)"
          field="amount"
          value={formValues["amount"]}
          onChangeText={(val: string) => handleInputChange("amount", val)}
          onFieldUpdate={handleInputUpdate}
          buttonsActive
        />
        <GestureHandlerRootView>
          <View
            style={{
              backgroundColor: themeColor.border,
              ...styles.sliderTrack,
            }}
            onLayout={handleLayout}
          >
            <Animated.View style={progressStyle} />
            {MARKERS.map((percentage) => (
              <View
                key={percentage}
                style={[
                  styles.marker,
                  {
                    backgroundColor: themeColor.background,
                    borderColor: themeColor.border,
                    left: getMarkerPosition(percentage),
                  },
                ]}
              />
            ))}

            <GestureDetector gesture={pan}>
              <Animated.View
                style={[
                  { backgroundColor: themeColor.backgroundBlack },
                  styles.sliderHandle,
                  sliderStyle,
                ]}
              />
            </GestureDetector>
          </View>
        </GestureHandlerRootView>

        <TextInput
          label="Total (USDT)"
          field="total"
          value={formValues["total"]}
          onChangeText={(val: string) => handleInputChange("total", val)}
        />
        <View>
          <View
            style={{
              marginBottom: 4,
              ...styles.rowCenter,
            }}
          >
            <Button
              variant="custom"
              onPress={() => toggleCheckBox("tp")}
              style={styles.rowCenter}
            >
              <CheckBox
                isChecked={isChecked["tp"]}
                style={{ marginRight: 6 }}
              />
              <Text variant="s" weight="light">
                TP/SL
              </Text>

              <View
                style={{
                  borderColor: themeColor.icon,
                  ...styles.underline,
                }}
              />
            </Button>
          </View>
          <View style={styles.rowCenter}>
            <Button
              variant="custom"
              onPress={() => toggleCheckBox("iceberg")}
              style={styles.rowCenter}
            >
              <CheckBox
                isChecked={isChecked["iceberg"]}
                style={{ marginRight: 6 }}
              />
              <Text variant="s" weight="light">
                Iceberg
              </Text>
              <View
                style={{
                  borderColor: themeColor.icon,
                  ...styles.underline,
                }}
              />
            </Button>
          </View>
        </View>
      </>
    );
  }
);

export default TradeForm;

const styles = StyleSheet.create({
  infoButton: {
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight: 4,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  underline: {
    marginTop: -1,
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderRadius: 1,
  },
  sliderTrack: {
    height: 1,
    borderRadius: 2,
    justifyContent: "center",
    marginVertical: 16,
    // ...Platform.select({
    //   ios: {
    //     marginVertical: 16,
    //   },
    //   android: {
    //     marginTop: 16,
    //   },
    // }),
  },
  sliderHandle: {
    width: 12,
    height: 12,
    borderRadius: 2,
    position: "absolute",
    left: 5,
  },
  marker: {
    position: "absolute",
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    transform: [{ rotate: "45deg" }],
    borderWidth: 1,
    borderRadius: 1,
    top: "50%",
    marginTop: -(MARKER_SIZE / 2),
  },
  progressBar: {
    height: 1,
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 2,
  },
});
