import Svg, { Rect, Path } from "react-native-svg";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { palette } from "@/constants/Colors";

const SearchIcon = () => {
  return (
    <Svg width="41" height="42" viewBox="0 0 41 42" fill="none">
      <Path
        d="M10.2418 42H40.6258V10.5918L30.7254 0.691406H10.2418V42Z"
        fill="#EFF0F2"
      />
      <Path
        d="M30.7254 10.5918H40.6258L30.7254 0.691406V10.5918Z"
        fill="#C8CCD1"
      />
      <Rect
        x="13.9971"
        y="16.0542"
        width="20.4836"
        height="2.04836"
        fill="white"
      />
      <Rect
        x="13.9971"
        y="20.1509"
        width="20.4836"
        height="2.04836"
        fill="white"
      />
      <Rect
        x="13.9971"
        y="24.2476"
        width="20.4836"
        height="2.04836"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.5227 31.4167C21.1791 31.4167 25.7645 26.8313 25.7645 21.1749C25.7645 15.5185 21.1791 10.9331 15.5227 10.9331C9.86629 10.9331 5.28088 15.5185 5.28088 21.1749C5.28088 23.4056 5.99405 25.4698 7.20483 27.1518L0 34.1729L1.9061 36.1289L9.08061 29.1374C10.8402 30.5628 13.0817 31.4167 15.5227 31.4167ZM15.5227 28.4466C11.5066 28.4466 8.251 25.1909 8.251 21.1749C8.251 17.1589 11.5066 13.9032 15.5227 13.9032C19.5387 13.9032 22.7944 17.1589 22.7944 21.1749C22.7944 25.1909 19.5387 28.4466 15.5227 28.4466Z"
        fill="#9299A5"
      />
    </Svg>
  );
};

export default SearchIcon;
