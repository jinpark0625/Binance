import { useCallback, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Button, Text, SymbolList } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { palette } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { useBinance } from "@/hooks/query";
import Coin from "@/components/icons/Coin";
import { router } from "expo-router";
import { useRecoilState } from "recoil";
import { activeSymbolState } from "@/atom/activeSymbolAtom";

const HomeScreen = () => {
  const themeColor = useThemeColor();

  const [activeSymbol, setActiveSymbol] = useRecoilState(activeSymbolState);

  const [isExapanded, setIsExpanded] = useState(true);

  const { useGetSymbols } = useBinance();

  const handleNavigateToTrade = () => {
    router.push("/trade");
  };

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handlePress = (symbol: string, price: string) => {
    setActiveSymbol({
      symbol,
      price,
    });

    handleNavigateToTrade();
  };

  const [symbols, isSymbolLoading, isSymbolError] = useGetSymbols();

  const HeaderSection = useCallback(
    () => (
      <View
        style={{
          borderBottomColor: themeColor.border,
          ...styles.border,
        }}
      >
        <View style={[styles.rowCenter, styles.wrap]}>
          <View>
            <Button
              variant="custom"
              onPress={handleExpand}
              style={styles.rowCenter}
            >
              <Text weight="light">
                Total Balance ({`${activeSymbol?.symbol || symbols[0]?.symbol}`}
                )
              </Text>
              <MaterialIcons
                name={isExapanded ? "expand-less" : "expand-more"}
                size={18}
                color={themeColor.backgroundBlack}
              />
            </Button>

            {isExapanded && (
              <View>
                <Text variant="xl" weight="medium" style={{ paddingTop: 8 }}>
                  {`${activeSymbol?.price || symbols[0]?.price}`}
                </Text>
                <Text variant="s" color="textSecondary">
                  ≈${`${activeSymbol?.price || symbols[0]?.price}`}
                </Text>
              </View>
            )}
          </View>

          <Button
            title="Add Funds"
            variant="primary"
            onPress={handleNavigateToTrade}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
            }}
          />
        </View>
        <Button
          variant="custom"
          onPress={handleNavigateToTrade}
          style={{
            borderColor: palette.primary,
            backgroundColor: themeColor.goldLight,
            ...styles.button,
          }}
        >
          <View style={[styles.rowCenter, styles.gap]}>
            <Coin />
            <View style={{ marginLeft: 8 }}>
              <Text>Start Your First Trading</Text>
              <Text variant="s" weight="light" color="textSecondary">
                Trade Now
              </Text>
            </View>
          </View>

          <MaterialIcons
            name="arrow-forward"
            size={24}
            color={themeColor.backgroundBlack}
          />
        </Button>
      </View>
    ),
    [isExapanded, themeColor, activeSymbol, symbols]
  );

  const renderContent = () => {
    if (isSymbolError) {
      return (
        <View style={styles.centerContent}>
          <Text staticColor="red">Failed to load data. Please try again.</Text>
        </View>
      );
    }

    if (isSymbolLoading) {
      return (
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" color={palette.primary} />
        </View>
      );
    }

    return (
      <SymbolList
        data={symbols}
        listHeaderComponent={<HeaderSection />}
        onPress={handlePress}
      />
    );
  };

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      {renderContent()}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 24 },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrap: {
    justifyContent: "space-between",
  },
  button: {
    marginVertical: 16,
    padding: 12,
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  gap: {
    gap: 4,
  },
  border: {
    borderBottomWidth: 1,
    marginBottom: 12,
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
