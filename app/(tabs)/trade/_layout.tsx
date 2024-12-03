import { Stack, router } from "expo-router";
import { ChartHeader } from "@/components";

export default function TradeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="chart"
        options={{
          header: () => <ChartHeader />,
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
