import { View, SafeAreaView, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { useSetRecoilState } from "recoil";
import { searchQueryState } from "@/atom/searchQueryAtom";

const SearchHeader = () => {
  const colorTheme = useThemeColor();

  const setSearchQuery = useSetRecoilState(searchQueryState);

  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons
        name="arrow-back"
        size={24}
        color={colorTheme.backgroundBlack}
        onPress={() => router.back()}
      />
      <View style={{ flex: 1 }}>
        <SearchBar isHeader={true} onChangeText={setSearchQuery} />
      </View>
    </SafeAreaView>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 16,
    gap: 16,
  },
});
