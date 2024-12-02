import { Dimensions, View, StyleSheet } from "react-native";
import { Button, CustomTabBar } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const WINDOW_HEIGHT = Dimensions.get("window").height;

const OrdersTab = () => {
  const themeColor = useThemeColor();

  return (
    <View
      style={{
        height: WINDOW_HEIGHT,
        ...styles.container,
      }}
    >
      <MaterialTopTabs
        tabBar={CustomTabBar}
        screenOptions={{
          tabBarStyle: { height: "auto" },
        }}
      >
        <MaterialTopTabs.Screen
          name="orders"
          options={{ title: "Open Orders (0)" }}
        />
        <MaterialTopTabs.Screen
          name="holdings"
          options={{ title: "Holdings" }}
        />
      </MaterialTopTabs>
      <View style={styles.buttonContainer}>
        <Button variant="custom" onPress={console.log} style={styles.button}>
          <MaterialIcons
            name="pending-actions"
            size={18}
            color={themeColor.icon}
          />
        </Button>
      </View>
    </View>
  );
};

export default OrdersTab;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    right: 16,
    top: 3,
  },
  button: {
    marginLeft: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
