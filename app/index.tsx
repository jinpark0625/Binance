import { View } from "react-native";
import { Text, Button } from "@/components";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello~!~!</Text>
      <Button title={"호잇"} />
    </View>
  );
}
