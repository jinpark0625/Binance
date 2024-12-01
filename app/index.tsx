import { useState } from "react";
import { View, ScrollView, SafeAreaView, Pressable } from "react-native";
import { BottomSheet, Button, CheckBox, Text, TextInput } from "@/components";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PriceSortIcon from "@/components/icons/PriceSortIcon";
import { palette } from "@/constants/Colors";

export default function Index() {
  const themeColor = useThemeColor();

  const [value, setValue] = useState("");
  const [priceSort, setPriceSort] = useState<number>(0);

  const isOpen = useSharedValue(false);

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const togglePriceSort = () => {
    setPriceSort((prev) => (prev + 1) % 3);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: themeColor.background,
      }}
    >
      {/* CoinInfo */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginBottom: 8,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: -4,
            }}
          >
            <Text variant="lg" weight="medium">
              BTC/USDT
            </Text>
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color={themeColor.backgroundBlack}
            />
          </View>
          <Text variant="s" staticColor="green">
            +0.05%
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Button
            variant="custom"
            style={{ marginRight: 12 }}
            onPress={console.log}
          >
            <MaterialIcons
              name="candlestick-chart"
              size={24}
              color={themeColor.icon}
            />
          </Button>
          <Button variant="custom" onPress={console.log}>
            <MaterialIcons
              name="more-horiz"
              size={24}
              color={themeColor.icon}
            />
          </Button>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          backgroundColor: themeColor.background,
        }}
      >
        {/* PriceIndicator & SpotOrderForm Container*/}
        <View
          style={{
            flexDirection: "row",
            gap: 12,
          }}
        >
          {/* PriceIndicator */}
          <View
            style={{
              flex: 1,

              justifyContent: "space-between",
            }}
          >
            {/* Table Header */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <Text variant="xxs" weight="light" color="textSecondary">
                Price{`\n`}(USDT)
              </Text>
              <Text
                variant="xxs"
                align="right"
                weight="light"
                color="textSecondary"
              >
                Amount{`\n`}(BTC)
              </Text>
            </View>

            {/* Higher Price */}
            <View style={{ backgroundColor: palette.redLight }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="red">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="red">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="red">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="red">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="red">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="red">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="red">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
            </View>
            {/* Current Price */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text variant="lg" weight="medium" style={{ marginBottom: -2 }}>
                96,864.01
              </Text>
              <Text variant="s" weight="light" color="textSecondary">
                ≈$96,864.01
              </Text>
            </View>
            {/* Lower Price */}
            <View
              style={{
                backgroundColor: palette.greenLight,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="green">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="green">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="green">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="green">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="green">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="green">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="s" weight="light" staticColor="green">
                  111,000
                </Text>
                <Text variant="s" weight="light">
                  0.00010
                </Text>
              </View>
            </View>
            {/* Filter */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 6,
              }}
            >
              <Button
                variant="custom"
                onPress={togglePriceSort}
                style={{
                  height: 20,
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 4,
                  backgroundColor: themeColor.fieldBackground,
                  paddingLeft: 8,
                  paddingRight: 4,
                }}
              >
                <Text variant="xs" color="textSecondary">
                  0.01
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
                style={{
                  width: 20,
                  height: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PriceSortIcon variant={priceSort} />
              </Button>
            </View>
          </View>
          {/* SpotOrderForm */}
          <View
            style={{
              flex: 1.6,
              gap: 8,

              justifyContent: "space-between",
            }}
          >
            {/* Buy & Sell Tab Button */}
            <View
              style={{
                height: 26,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 26,
                  borderWidth: 1,
                  borderRadius: 6,
                  borderColor: themeColor.border,
                }}
              />
              <Button
                variant="custom"
                onPress={console.log}
                style={{
                  height: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 6,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    right: 12,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: palette.green,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    width: 0,
                    height: "100%",
                    borderLeftWidth: 12,
                    borderTopWidth: 11,
                    borderBottomWidth: 11,
                    borderLeftColor: palette.green,
                    borderTopColor: "transparent",
                    borderBottomColor: "transparent",
                  }}
                />
                <Text staticColor="white">Buy</Text>
              </Button>
              <Button
                variant="custom"
                onPress={console.log}
                style={{
                  height: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 6,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    left: 12,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: palette.red,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    left: 0,
                    width: 0,
                    height: "100%",
                    borderRightWidth: 12,
                    borderTopWidth: 11,
                    borderBottomWidth: 11,
                    borderRightColor: palette.red,
                    borderTopColor: "transparent",
                    borderBottomColor: "transparent",
                  }}
                />
                <Text staticColor="white">Sell</Text>
              </Button>
            </View>
            {/*  */}
            <Button
              variant="custom"
              onPress={togglePriceSort}
              style={{
                height: 26,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 8,
                backgroundColor: themeColor.fieldBackground,
                paddingLeft: 8,
                paddingRight: 4,
              }}
            >
              <MaterialIcons name="error" size={16} color={themeColor.icon} />
              <Text variant="s">Limit</Text>

              <MaterialIcons
                name="arrow-drop-down"
                size={20}
                color={themeColor.textSecondary}
              />
            </Button>
            <TextInput
              label="Price (USDT)"
              value={value}
              onChangeText={setValue}
              buttonsActive
              popoverActive
            />
            <TextInput
              label="Amount (BTC)"
              value={value}
              onChangeText={setValue}
              buttonsActive
            />
            <View
              style={{
                height: 26,
                backgroundColor: themeColor.fieldBackground,
              }}
            />
            <TextInput
              label="Amount (BTC)"
              value={value}
              onChangeText={setValue}
            />
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <CheckBox isChecked style={{ marginRight: 6 }} />
                <Button variant="custom" onPress={console.log}>
                  <Text variant="s" weight="light">
                    TP/SL
                  </Text>

                  <View
                    style={{
                      marginTop: -1,
                      borderWidth: 0.5,
                      borderStyle: "dashed",
                      borderRadius: 1,
                      borderColor: themeColor.icon,
                    }}
                  />
                </Button>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox isChecked style={{ marginRight: 6 }} />
                <Button variant="custom" onPress={console.log}>
                  <Text variant="s" weight="light">
                    Iceberg
                  </Text>
                  <View
                    style={{
                      marginTop: -1,
                      borderWidth: 0.5,
                      borderStyle: "dashed",
                      borderRadius: 1,
                      borderColor: themeColor.icon,
                    }}
                  />
                </Button>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="custom" onPress={console.log}>
                  <Text variant="s" weight="light" color="textSecondary">
                    Avbl
                  </Text>
                  <View
                    style={{
                      marginTop: -1,
                      borderWidth: 0.5,
                      borderStyle: "dashed",
                      borderRadius: 1,
                      borderColor: themeColor.icon,
                    }}
                  />
                </Button>
                <Button
                  variant="custom"
                  onPress={console.log}
                  style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
                >
                  <Text variant="s" weight="light">
                    0.0000 USDT
                  </Text>
                  <MaterialIcons
                    name="add-circle"
                    size={16}
                    color={palette.gold}
                  />
                </Button>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="custom" onPress={console.log}>
                  <Text variant="s" weight="light" color="textSecondary">
                    Nax Buy
                  </Text>
                  <View
                    style={{
                      marginTop: -1,
                      borderWidth: 0.5,
                      borderStyle: "dashed",
                      borderRadius: 1,
                      borderColor: themeColor.icon,
                    }}
                  />
                </Button>
                <Button
                  variant="custom"
                  onPress={console.log}
                  style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
                >
                  <Text variant="s" weight="light">
                    -- BTC
                  </Text>
                </Button>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="custom" onPress={console.log}>
                  <Text variant="s" weight="light" color="textSecondary">
                    Est. Fee
                  </Text>
                  <View
                    style={{
                      marginTop: -1,
                      borderWidth: 0.5,
                      borderStyle: "dashed",
                      borderRadius: 1,
                      borderColor: themeColor.icon,
                    }}
                  />
                </Button>
                <Button
                  variant="custom"
                  onPress={console.log}
                  style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
                >
                  <Text variant="s" weight="light">
                    -- BTC
                  </Text>
                </Button>
              </View>
            </View>
            <Button title="Buy BTC" onPress={console.log} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
