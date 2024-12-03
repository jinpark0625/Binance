import { ReactNode } from "react";
import { FlatList, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Text, Symbol } from "@/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchIcon from "@/components/icons/SearchIcon";

type DataType = {
  symbol: string;
  price: string;
};

interface SymbolList {
  data: DataType[];
  listHeaderComponent?: ReactNode;
  onPress: (symbol: string, price: string) => void;
  style?: StyleProp<ViewStyle>;
}

const SymbolList = ({
  data,
  listHeaderComponent,
  onPress,
  style,
}: SymbolList) => {
  const insets = useSafeAreaInsets();

  const ListHeader = () => (
    <View style={styles.container}>
      <Text variant="xs" weight="light" color="textSecondary">
        Name
      </Text>
      <Text variant="xs" weight="light" align="right" color="textSecondary">
        Last Price
      </Text>
    </View>
  );

  const Item = ({ symbol, price }: DataType) => (
    <Symbol symbol={symbol} price={price} onPress={onPress} />
  );

  const EmptyListComponent = () => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 32,
        gap: 16,
      }}
    >
      <SearchIcon />
      <Text color="textSecondary">No records found.</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        data={data}
        ListHeaderComponent={
          <>
            {listHeaderComponent}
            <ListHeader />
          </>
        }
        renderItem={({ item }) => (
          <Item symbol={item.symbol} price={item.price} />
        )}
        keyExtractor={(item, index) => `${item.symbol}-${index}`}
        contentContainerStyle={[
          {
            gap: 16,
            paddingHorizontal: 16,
            paddingBottom: insets.bottom + 120,
          },
          style,
        ]}
        ListEmptyComponent={EmptyListComponent}
      />
    </View>
  );
};

export default SymbolList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
