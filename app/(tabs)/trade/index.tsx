import { useRef, useState, useCallback } from "react";
import { Dimensions, View, StyleSheet, Keyboard, Platform } from "react-native";
import { Button, BottomSheetContent, Text, SearchBar } from "@/components";
import {
  CoinInfo,
  OrdersTab,
  PriceIndicator,
  TradeForm,
  TradeTab,
  TradeOverview,
} from "@/components/trade";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PriceSortIcon from "@/components/icons/PriceSortIcon";
import { useSetRecoilState, useRecoilState } from "recoil";
import { bottomSheetState } from "@/atom/bottomSheetAtom";
import { filterState } from "@/atom/filterStateAtom";
import { activeSymbolState } from "@/atom/activeSymbolAtom";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { searchQueryState } from "@/atom/searchQueryAtom";
import Search from "@/app/search";
import { ScrollView } from "react-native-gesture-handler";

export type TradeType = "buy" | "sell";
export type FormValueType = {
  price: string;
  amount: string;
  total: string;
};
export type CheckboxType = {
  tp: boolean;
  iceberg: boolean;
};
export type FilterType = {
  priceUnit: string;
  orderOption: string;
};

const WINDOW_HEIGHT = Dimensions.get("window").height;

const TradeScreen = () => {
  const scrollRef = useRef(null);

  const inset = useSafeAreaInsets();
  const themeColor = useThemeColor();

  // atoms
  const setBottomSheet = useSetRecoilState(bottomSheetState);
  const [selcetedFilter, setSelectedFilter] = useRecoilState(filterState);
  const [activeSymbol, setActiveSymbol] = useRecoilState(activeSymbolState);
  const setSearchQuery = useSetRecoilState(searchQueryState);

  // states
  const [priceSortVariant, setPriceSortVariant] = useState<number>(0);
  const [tradeType, setTradeType] = useState<TradeType>("buy");
  const [isChecked, setIsChecked] = useState<CheckboxType>({
    tp: false,
    iceberg: false,
  });
  const [formValues, setFormValues] = useState<FormValueType>({
    price: "",
    amount: "",
    total: "",
  });

  const SearchSheet = useCallback(() => {
    return (
      <View style={{ height: WINDOW_HEIGHT * 0.9 }}>
        <SearchBar onChangeText={setSearchQuery} />
        {/* screen을 불러서 사용하는건 그다지... 흠..? */}
        <Search onPress={closeBottomSheet} />
      </View>
    );
  }, []);

  // navigate
  const handleNavigateToChart = () => {
    router.push("/trade/chart");
  };

  // handle bottomsheet
  const openBottomSheet = (contentType: string) => {
    const bottomSheetContent =
      contentType === "search" ? (
        <SearchSheet />
      ) : (
        <BottomSheetContent contentType={contentType} onPress={handleFilter} />
      );

    setBottomSheet({
      isOpen: true,
      content: bottomSheetContent,
    });
  };

  const closeBottomSheet = () => {
    Keyboard.dismiss();
    setBottomSheet({
      isOpen: false,
      content: null,
    });
  };

  // handle filter
  const togglePriceSort = () => {
    setPriceSortVariant((prev) => (prev + 1) % 3);
  };

  const toggleCheckBox = (field: keyof CheckboxType) => {
    setIsChecked((prevValues) => ({
      ...prevValues,
      [field]: !prevValues[field],
    }));
  };

  const handleFilter = (field: string, value: string) => {
    setSelectedFilter((prev) => ({
      ...prev,
      [field]: value,
    }));
    closeBottomSheet();
  };

  const handleTransactionType = (type: TradeType) => {
    setTradeType(type);
  };

  // handle input
  const handleInputChange = (field: keyof FormValueType, value: string) => {
    setFormValues((prevValues) => {
      if (field === "total") {
        return {
          ...prevValues,
          total: value,
        };
      }

      const newValues = { ...prevValues, [field]: value };

      if (newValues.price && newValues.amount) {
        const price = parseFloat(newValues.price);
        const amount = parseFloat(newValues.amount);
        let total = price * amount;

        total = Math.ceil(total * 10000000) / 10000000;
        newValues.total = total.toFixed(7);
      }

      return newValues;
    });
  };

  const handleInputUpdate = (
    field: keyof FormValueType,
    isIncrease: boolean
  ) => {
    setFormValues((prevValues) => {
      let newValue = parseFloat(prevValues[field] || "0");

      const delta =
        field === "price" ? 0.001 : field === "amount" ? 0.00001 : 0;

      newValue = isIncrease ? newValue + delta : newValue - delta;

      newValue = parseFloat(newValue.toFixed(5));

      const newValues = { ...prevValues, [field]: newValue.toString() };

      if (newValues.price && newValues.amount) {
        const price = parseFloat(newValues.price);
        const amount = parseFloat(newValues.amount);
        let total = price * amount;

        total = Math.ceil(total * 10000000) / 10000000;
        newValues.total = total.toFixed(7);
      }

      return newValues;
    });
  };

  return (
    <View
      style={{ paddingTop: Platform.OS === "ios" ? inset.top : inset.top + 12 }}
    >
      {/* CoinInfo */}
      <CoinInfo
        symbol={activeSymbol.symbol || "BTC"}
        onPress={handleNavigateToChart}
        openBottomSheet={openBottomSheet}
      />
      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: themeColor.background,
        }}
        stickyHeaderIndices={[1]}
        ref={scrollRef}
      >
        {/* PriceIndicator & SpotOrderForm Container*/}
        <View style={styles.contentContainer}>
          {/* PriceIndicator */}
          <View style={styles.headerContainer}>
            {/* Table Header */}
            <View style={styles.header}>
              <Text variant="xxs" weight="light" color="textSecondary">
                Price{`\n`}(USDT)
              </Text>
              <Text
                variant="xxs"
                align="right"
                weight="light"
                color="textSecondary"
              >
                Amount{`\n`}({`${activeSymbol?.symbol || "BTC"}`})
              </Text>
            </View>

            {/* Price Indicator */}
            <PriceIndicator
              priceSortVariant={priceSortVariant}
              onPress={handleInputChange}
              price={activeSymbol.price || "0.02200112"}
            />

            {/* Filter */}
            <View style={styles.filterContainer}>
              <Button
                variant="custom"
                onPress={() => openBottomSheet("priceUnit")}
                style={{
                  backgroundColor: themeColor.fieldBackground,
                  ...styles.filterButton,
                }}
              >
                <Text variant="xs" color="textSecondary">
                  {selcetedFilter.priceUnit}
                </Text>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={20}
                  color={themeColor.textSecondary}
                />
              </Button>
              <Button
                variant="custom"
                onPress={togglePriceSort}
                style={styles.filterIcon}
              >
                <PriceSortIcon variant={priceSortVariant} />
              </Button>
            </View>
          </View>

          {/* SpotOrderForm */}
          <View style={styles.spotOrderFormContainer}>
            {/* TransactionTab Button */}
            <TradeTab tradeType={tradeType} onPress={handleTransactionType} />
            {/* Trade Form */}
            <TradeForm
              isChecked={isChecked}
              toggleCheckBox={toggleCheckBox}
              formValues={formValues}
              handleInputChange={handleInputChange}
              openBottomSheet={openBottomSheet}
              handleInputUpdate={handleInputUpdate}
              ref={scrollRef}
            />

            <TradeOverview tradeType={tradeType} />
          </View>
        </View>
        {/* Tabs */}

        <OrdersTab />
      </ScrollView>
    </View>
  );
};

export default TradeScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 12,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
    marginTop: 6,
  },
  filterButton: {
    height: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 4,
  },
  filterIcon: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  spotOrderFormContainer: {
    flex: 1.6,
    gap: 8,
    justifyContent: "space-between",
  },
});
