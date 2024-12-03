import { useMemo, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Text, SymbolList } from "@/components";
import { palette } from "@/constants/Colors";
import { searchQueryState } from "@/atom/searchQueryAtom";
import { activeSymbolState } from "@/atom/activeSymbolAtom";
import { router } from "expo-router";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useBinance } from "@/hooks/query";

interface Search {
  onPress?: () => void;
}

type ItemType = {
  symbol: string;
  price: string;
};

const Search = ({ onPress }: Search) => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const setActiveSymbol = useSetRecoilState(activeSymbolState);

  const { useGetSymbols } = useBinance();

  const [symbols, isSymbolLoading, isSymbolError] = useGetSymbols(30);

  const filteredData = useMemo(() => {
    const query = searchQuery?.toLowerCase() || "";
    return symbols?.filter((item: ItemType) =>
      item.symbol.toLowerCase().startsWith(query)
    );
  }, [searchQuery]);

  const handleNavigateToTrade = () => {
    router.push("/trade");
  };

  const handlePress = (symbol: string, price: string) => {
    setActiveSymbol({
      symbol,
      price,
    });

    if (onPress) onPress();

    handleNavigateToTrade();
  };

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
        data={filteredData}
        onPress={handlePress}
        style={{ paddingTop: onPress ? 0 : 24 }}
      />
    );
  };

  useEffect(() => {
    return () => {
      setSearchQuery("");
    };
  }, []);

  return renderContent();
};

export default Search;

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
