import { useMemo, memo } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Button, Text } from "@/components";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

const DATA = [
  {
    price: "114,000",
    amount: "0.00010",
  },
  {
    price: "113,000",
    amount: "0.00010",
  },
  {
    price: "112,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
  {
    price: "110,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
  {
    price: "111,000",
    amount: "0.00010",
  },
];

type OnPressType = {
  onPress: (price: string) => void;
};

interface PriceIndicator extends OnPressType {
  priceSortVariant: number;
}

interface PriceData {
  price: string;
  amount: string;
}

type PriceListProps = OnPressType & {
  data: PriceData[];
  variant: "higher" | "lower";
  backgroundColor: string;
};

type ItemProps = OnPressType & {
  price: string;
  amount: string;
  variant: "higher" | "lower";
  backgroundColor: string;
};

const Item = ({
  price,
  amount,
  variant,
  backgroundColor,
  onPress,
}: ItemProps) => (
  <Button
    variant="custom"
    style={{
      ...styles.itemContainer,
    }}
    onPress={() => onPress(price)}
  >
    <View
      style={{
        backgroundColor,
        width: 100,
        ...styles.indicator,
      }}
    />
    <Text
      variant="s"
      weight="light"
      staticColor={variant === "higher" ? "red" : "green"}
    >
      {price}
    </Text>
    <Text variant="s" weight="light">
      {amount}
    </Text>
  </Button>
);

const PriceList = memo(
  ({ data, variant, backgroundColor, onPress }: PriceListProps) => {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item
              price={item.price}
              amount={item.amount}
              variant={variant}
              backgroundColor={backgroundColor}
              onPress={onPress}
            />
          )}
          keyExtractor={(item, index) => `${item.price}-${index}`}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
    );
  }
);

const PriceIndicator = ({ priceSortVariant, onPress }: PriceIndicator) => {
  const themeColor = useThemeColor();

  const slicedData = useMemo(() => {
    const isHigherExpanded = priceSortVariant === 1;
    const isLowerExpanded = priceSortVariant === 2;

    return {
      higher: isHigherExpanded ? DATA : DATA.slice(0, 7),
      lower: isLowerExpanded ? DATA : DATA.slice(0, 7),
    };
  }, [priceSortVariant]);

  return (
    <View style={styles.container}>
      {/* Higher Price */}
      {priceSortVariant <= 1 && (
        <PriceList
          data={slicedData.higher}
          variant="higher"
          backgroundColor={themeColor.redLight}
          onPress={onPress}
        />
      )}
      {/* Current Price */}
      <View
        style={{
          paddingBottom: priceSortVariant === 1 ? 12 : 0,
          paddingTop: priceSortVariant === 2 ? 12 : 0,
          ...styles.center,
        }}
      >
        <Text variant="lg" weight="medium" style={styles.marginBottom}>
          96,864.01
        </Text>
        <Text variant="s" weight="light" color="textSecondary">
          ≈$96,864.01
        </Text>
      </View>
      {/* Lower Price */}
      {priceSortVariant % 2 === 0 && (
        <PriceList
          data={slicedData.lower}
          variant="lower"
          backgroundColor={themeColor.greenLight}
          onPress={onPress}
        />
      )}
    </View>
  );
};

export default PriceIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  indicator: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  marginBottom: {
    marginBottom: -2,
  },
});
