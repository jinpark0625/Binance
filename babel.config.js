module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@hooks/*": ["./hooks"],
            "@components/*": ["./components"],
            "@": ".",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
