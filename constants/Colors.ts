import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const palette = {
  white: "#fff",
  gray: {
    100: "#F5F5F5",
    200: "#E9ECEF",
    300: "#D5D9DC",
    400: "#9299A5",
    500: "#848D9B",
    600: "#707A8A",
    700: "#333B47",
    800: "#29313D",
    900: "#202530",
  },
  primary: "#FCD435",
  green: "#2DBD85",
  greenLight: "#F5FCF9",
  greenLightDark: "#202D35",
  red: "#F6455D",
  redLight: "#FFF6F7",
  redLightDark: "#2A2732",
  gold: "#C09306",
  goldLight: "#FDF8E5",
  goldLightDark: "#2B2F30",
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.white,
    text: palette.gray[900],
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: palette.gray[900],
    text: palette.white,
  },
};

export const Colors = {
  light: {
    background: palette.white,
    backgroundBlack: palette.gray[900],
    fieldBackground: palette.gray[100],
    border: palette.gray[200],
    textPrimary: palette.gray[900],
    textSecondary: palette.gray[400],
    icon: palette.gray[400],
    disabled: palette.gray[300],
    redLight: palette.redLight,
    greenLight: palette.greenLight,
    goldLight: palette.goldLight,
  },
  dark: {
    background: palette.gray[900],
    backgroundBlack: palette.gray[100],
    fieldBackground: palette.gray[800],
    border: palette.gray[700],
    textPrimary: palette.gray[200],
    textSecondary: palette.gray[600],
    icon: palette.gray[600],
    disabled: palette.gray[700],
    redLight: palette.redLightDark,
    greenLight: palette.greenLightDark,
    goldLight: palette.goldLightDark,
  },
};
