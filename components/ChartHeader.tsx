import { useCallback } from "react";
import {
  Dimensions,
  View,
  Keyboard,
  StyleSheet,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button, Text, SearchBar } from "@/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { activeSymbolState } from "@/atom/activeSymbolAtom";
import { bottomSheetState } from "@/atom/bottomSheetAtom";
import { searchQueryState } from "@/atom/searchQueryAtom";
import Search from "@/app/search";

const WINDOW_HEIGHT = Dimensions.get("window").height;

const ChartHeader = () => {
  const activeSymbol = useRecoilValue(activeSymbolState);
  const setBottomSheet = useSetRecoilState(bottomSheetState);
  const setSearchQuery = useSetRecoilState(searchQueryState);

  const inset = useSafeAreaInsets();
  const themeColor = useThemeColor();

  const SearchSheet = useCallback(() => {
    return (
      <View style={{ height: WINDOW_HEIGHT * 0.9 }}>
        <SearchBar onChangeText={setSearchQuery} />
        <Search onPress={closeBottomSheet} />
      </View>
    );
  }, []);

  // handle bottomsheet
  const openBottomSheet = () => {
    setBottomSheet({
      isOpen: true,
      content: <SearchSheet />,
    });
  };

  const closeBottomSheet = () => {
    Keyboard.dismiss();
    setBottomSheet({
      isOpen: false,
      content: null,
    });
  };

  return (
    <View style={{ paddingTop: inset.top, ...styles.container }}>
      <View style={styles.leftContainer}>
        <Pressable onPress={() => router.back()}>
          <MaterialIcons
            name="arrow-back"
            size={24}
            color={themeColor.backgroundBlack}
          />
        </Pressable>

        <Button
          variant="custom"
          style={styles.titleContainer}
          onPress={openBottomSheet}
        >
          <Text variant="lg" weight="medium">
            {/* title */}
            {activeSymbol.symbol || "BTC"}/USDT
          </Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color={themeColor.backgroundBlack}
          />
        </Button>
      </View>

      <View style={styles.rightContainer}>
        <Pressable onPress={() => {}}>
          <MaterialIcons name="star" size={18} color={themeColor.icon} />
        </Pressable>
        <Pressable onPress={() => {}}>
          <MaterialIcons
            name="share"
            size={18}
            color={themeColor.backgroundBlack}
          />
        </Pressable>
        <Pressable onPress={() => {}}>
          <MaterialIcons
            name="dashboard"
            size={18}
            color={themeColor.backgroundBlack}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ChartHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  leftContainer: { flexDirection: "row", alignItems: "center", gap: 16 },
  rightContainer: { flexDirection: "row", gap: 12 },
  titleContainer: {
    flexDirection: "row",
  },
});
