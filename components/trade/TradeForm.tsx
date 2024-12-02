import { View, StyleSheet } from "react-native";
import { Button, CheckBox, Text, TextInput } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { FormValueType, CheckboxType } from "@/app/(tabs)/trade";
import { useRecoilValue } from "recoil";
import { filterState } from "@/atom/filterStateAtom";

interface TradeForm {
  isChecked: CheckboxType;
  toggleCheckBox: (field: keyof CheckboxType) => void;
  formValues: FormValueType;
  handleInputChange: (field: keyof FormValueType, value: string) => void;
  openBottomSheet: (contentType: string) => void;
  handleInputUpdate: (field: keyof FormValueType, isIncrease: boolean) => void;
}

const TradeForm = ({
  isChecked,
  toggleCheckBox,
  formValues,
  handleInputChange,
  openBottomSheet,
  handleInputUpdate,
}: TradeForm) => {
  const themeColor = useThemeColor();
  const selectedOrderOption = useRecoilValue(filterState);

  return (
    <>
      <Button
        variant="custom"
        onPress={() => openBottomSheet("orderOption")}
        style={{
          backgroundColor: themeColor.fieldBackground,
          ...styles.infoButton,
        }}
      >
        <MaterialIcons name="error" size={16} color={themeColor.icon} />
        <Text variant="s">{selectedOrderOption.orderOption}</Text>
        <MaterialIcons
          name="arrow-drop-down"
          size={20}
          color={themeColor.textSecondary}
        />
      </Button>
      <TextInput
        label="Price (USDT)"
        field="price"
        value={formValues["price"]}
        onChangeText={(val: string) => handleInputChange("price", val)}
        onFieldUpdate={handleInputUpdate}
        buttonsActive
        popoverActive
      />
      <TextInput
        label="Amount (BTC)"
        field="amount"
        value={formValues["amount"]}
        onChangeText={(val: string) => handleInputChange("amount", val)}
        onFieldUpdate={handleInputUpdate}
        buttonsActive
      />
      <View
        style={{
          height: 26,
          backgroundColor: themeColor.fieldBackground,
        }}
      />
      <TextInput
        label="Total (USDT)"
        field="total"
        value={formValues["total"]}
        onChangeText={(val: string) => handleInputChange("total", val)}
      />
      <View>
        <View
          style={{
            marginBottom: 4,
            ...styles.rowCenter,
          }}
        >
          <Button
            variant="custom"
            onPress={() => toggleCheckBox("tp")}
            style={styles.rowCenter}
          >
            <CheckBox isChecked={isChecked["tp"]} style={{ marginRight: 6 }} />
            <Text variant="s" weight="light">
              TP/SL
            </Text>

            <View
              style={{
                borderColor: themeColor.icon,
                ...styles.underline,
              }}
            />
          </Button>
        </View>
        <View style={styles.rowCenter}>
          <Button
            variant="custom"
            onPress={() => toggleCheckBox("iceberg")}
            style={styles.rowCenter}
          >
            <CheckBox
              isChecked={isChecked["iceberg"]}
              style={{ marginRight: 6 }}
            />
            <Text variant="s" weight="light">
              Iceberg
            </Text>
            <View
              style={{
                borderColor: themeColor.icon,
                ...styles.underline,
              }}
            />
          </Button>
        </View>
      </View>
    </>
  );
};

export default TradeForm;

const styles = StyleSheet.create({
  infoButton: {
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight: 4,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  underline: {
    marginTop: -1,
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderRadius: 1,
  },
});
