import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import { AppStateStatus, Platform, View } from "react-native";
import { useOnlineManager, useAppState } from "@/hooks/query";
import { GlobalBottomSheet } from "@/components";
import { Stack } from "expo-router";
import { RecoilRoot } from "recoil";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <View style={{ flex: 1 }}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <GlobalBottomSheet />
          </View>
        </RecoilRoot>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
