import { View, StyleSheet } from "react-native";
import { Button, Text } from "@/components";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import SearchIcon from "@/components/icons/SearchIcon";

const OpenOrders = () => {
  const themeColor = useThemeColor();
  return (
    <View style={styles.container}>
      <SearchIcon />
      <View style={styles.textContainer}>
        <Text>No open orders</Text>
        <Text variant="s" weight="light" color="textSecondary">
          Let Top Traders Trade for you
        </Text>
      </View>
      <Button
        variant="custom"
        onPress={console.log}
        style={{ borderColor: themeColor.border, ...styles.buttonContainer }}
      >
        <Text variant="s" weight="light">
          Copy Trading
        </Text>
      </Button>
    </View>
  );
};

export default OpenOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  textContainer: {
    alignItems: "center",
    paddingVertical: 8,
    gap: 8,
  },
  buttonContainer: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});
