import { View, StyleSheet } from "react-native";
import { Text } from "@/components";

const Holdings = () => {
  return (
    <View style={styles.container}>
      <Text color="textSecondary">Current pair assets</Text>
    </View>
  );
};

export default Holdings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});
