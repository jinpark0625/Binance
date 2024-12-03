import { StyleSheet } from "react-native";
import { Button, Text } from "@/components";

interface Symbol {
  symbol: string;
  price: string;
  onPress: (symbol: string, price: string) => void;
}

const Symbol = ({ symbol, price, onPress }: Symbol) => {
  return (
    <Button
      variant="custom"
      style={styles.rowCenter}
      onPress={() => {
        onPress(symbol, price);
      }}
    >
      <Text>{symbol}</Text>
      <Text>{price}</Text>
    </Button>
  );
};

export default Symbol;

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
