import { View, StyleSheet, TextInput, Platform } from "react-native";
import { Button } from "@/components";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "@/atom/searchQueryAtom";

interface SearchBar {
  onChangeText: (text: string) => void;
  isHeader?: boolean;
}

const SearchBar = ({ isHeader = false, onChangeText }: SearchBar) => {
  const searchQuery = useRecoilValue(searchQueryState);

  const themeColor = useThemeColor();

  const handleClear = () => {
    onChangeText("");
  };

  return (
    <View style={isHeader ? undefined : styles.container}>
      <View
        style={{
          backgroundColor: themeColor.fieldBackground,
          ...styles.searchContainer,
        }}
      >
        <MaterialIcons
          name="search"
          size={18}
          color={themeColor.backgroundBlack}
        />
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={onChangeText}
          placeholderTextColor={themeColor.textSecondary}
          style={{
            color: themeColor.textPrimary,
            ...styles.input,
          }}
        />
        {searchQuery?.length > 0 && (
          <Button variant="custom" onPress={handleClear}>
            <MaterialIcons name="cancel" size={16} color={themeColor.icon} />
          </Button>
        )}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 32,
    marginLeft: 4,
    ...Platform.select({
      ios: {},
      android: {
        paddingVertical: 0,
        textAlignVertical: "center",
      },
    }),
    fontSize: 15,
  },
  clearButton: {
    padding: 4,
  },
});
