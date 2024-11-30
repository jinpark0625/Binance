import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import { AppStateStatus, Platform } from "react-native";
import { useOnlineManager, useAppState } from "@/hooks/query";
import { Stack } from "expo-router";

export default function RootLayout() {
  const onAppStateChange = (status: AppStateStatus) => {
    if (Platform.OS !== "web") {
      focusManager.setFocused(status === "active");
    }
  };

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  });

  useOnlineManager();
  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}
