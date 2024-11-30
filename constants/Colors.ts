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
  red: "#F6455D",
};

export const Colors = {
  light: {
    background: palette.white,
    fieldBackground: palette.gray[100],
    border: palette.gray[200],
    textPrimary: palette.gray[900],
    textSecondary: palette.gray[400],
    icon: palette.gray[400],
  },
  dark: {
    background: palette.gray[900],
    fieldBackground: palette.gray[900],
    border: palette.gray[700],
    textPrimary: palette.gray[200],
    textSecondary: palette.gray[600],
    icon: palette.gray[600],
  },
};
