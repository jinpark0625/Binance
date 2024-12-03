import { Dimensions, View, StyleSheet } from "react-native";
import { Button, CustomTabBar, Holdings, OpenOrders } from "@/components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

const Tab = createMaterialTopTabNavigator();

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
      <Tab.Navigator
        tabBar={CustomTabBar}
        screenOptions={{
          tabBarStyle: { height: "auto" },
        }}
      >
        <Tab.Screen name="OpenOrders" component={OpenOrders} />
        <Tab.Screen name="Holdings" component={Holdings} />
      </Tab.Navigator>
      <View style={styles.buttonContainer}>
        <Button variant="custom" onPress={() => {}} style={styles.button}>
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
    flex: 1,
    marginTop: 16,
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
