import { Colors } from "@/constants/Colors";
import { useColorScheme } from "./useColorScheme";

export function useThemeColor() {
  const theme = useColorScheme() ?? "light";

  return Colors[theme];
}
