import { View, SafeAreaView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Logo from "@/components/icons/Logo";
import { Button, Text } from "@/components";

const HomeHeader = () => {
  const themeColor = useThemeColor();

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Button
        variant="custom"
        style={{
          backgroundColor: themeColor.fieldBackground,
          ...styles.button,
        }}
        onPress={() => {}}
      >
        <MaterialIcons
          name="search"
          size={18}
          color={themeColor.backgroundBlack}
        />
        <Text color="textSecondary">🔥 XRP</Text>
      </Button>

      <View style={styles.iconContainer}>
        <MaterialIcons
          name="document-scanner"
          size={18}
          color={themeColor.backgroundBlack}
        />
        <MaterialIcons
          name="headphones"
          size={18}
          color={themeColor.backgroundBlack}
        />
        <MaterialIcons
          name="message"
          size={18}
          color={themeColor.backgroundBlack}
        />
        <MaterialIcons
          name="generating-tokens"
          size={18}
          color={themeColor.backgroundBlack}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 16,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flex: 1,
    height: 32,
    gap: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
