import { View, SafeAreaView, StyleSheet } from "react-native";
import { Button, Text } from "@/components";
import Price from "@/data/price.json";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { bottomSheetState } from "@/atom/bottomSheetAtom";
import { filterState } from "@/atom/filterStateAtom";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type OnPress = (field: string, value: string) => void;

interface BottomSheetContent {
  contentType: string;
  onPress: OnPress;
}

const OrderOptionSelector = ({
  onPress,
  closeBottomSheet,
  borderColor,
  iconColor,
}: {
  onPress: OnPress;
  closeBottomSheet: () => void;
  borderColor: string;
  iconColor: string;
}) => {
  const themeColor = useThemeColor();
  const selectedItem = useRecoilValue(filterState);

  return (
    <SafeAreaView>
      <View style={styles.priceUnitContainer}>
        {Price.orderUnit.map((item) => (
          <Button
            variant="custom"
            key={item}
            onPress={() => onPress("orderOption", item)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 8,
            }}
          >
            <Text>{item}</Text>
            {selectedItem.orderOption === item && (
              <MaterialIcons
                name="check"
                size={24}
                color={themeColor.backgroundBlack}
              />
            )}
          </Button>
        ))}
      </View>
      <Button
        variant="custom"
        style={{
          borderTopColor: borderColor,
          ...styles.priceUnitButton,
        }}
        onPress={closeBottomSheet}
      >
        <Text variant="lg">Cancel</Text>
      </Button>
    </SafeAreaView>
  );
};

const PriceUnitSelector = ({
  onPress,
  closeBottomSheet,
  borderColor,
  iconColor,
}: {
  onPress: OnPress;
  closeBottomSheet: () => void;
  borderColor: string;
  iconColor: string;
}) => {
  const themeColor = useThemeColor();
  const selectedFormattedPrice = useRecoilValue(filterState);

  return (
    <SafeAreaView>
      <View style={styles.priceUnitContainer}>
        {Price.priceUnit.map((item) => (
          <Button
            variant="custom"
            key={item}
            onPress={() => onPress("priceUnit", item)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 8,
            }}
          >
            <Text>{item}</Text>
            {selectedFormattedPrice.priceUnit === item && (
              <MaterialIcons
                name="check"
                size={24}
                color={themeColor.backgroundBlack}
              />
            )}
          </Button>
        ))}
      </View>
      <Button
        variant="custom"
        style={{
          borderTopColor: borderColor,
          ...styles.priceUnitButton,
        }}
        onPress={closeBottomSheet}
      >
        <Text variant="lg">Cancel</Text>
      </Button>
    </SafeAreaView>
  );
};

const BottomSheetContent = ({ contentType, onPress }: BottomSheetContent) => {
  const colorTheme = useThemeColor();
  const setBottomSheet = useSetRecoilState(bottomSheetState);

  const closeBottomSheet = () => {
    setBottomSheet({
      isOpen: false,
      content: null,
    });
  };

  switch (contentType) {
    case "priceUnit":
      return (
        <PriceUnitSelector
          onPress={onPress}
          closeBottomSheet={closeBottomSheet}
          borderColor={colorTheme.border}
          iconColor={colorTheme.backgroundBlack}
        />
      );
    case "orderOption":
      return (
        <OrderOptionSelector
          onPress={onPress}
          closeBottomSheet={closeBottomSheet}
          borderColor={colorTheme.border}
          iconColor={colorTheme.backgroundBlack}
        />
      );
    default:
      return (
        <View>
          <Text>Default Content</Text>
        </View>
      );
  }
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  priceUnitContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 12,
  },
  priceUnitButton: {
    paddingTop: 16,
    paddingBottom: 48,
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
