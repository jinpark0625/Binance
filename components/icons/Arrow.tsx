import Svg, { Polygon } from "react-native-svg";

interface Arrow {
  color: string;
  direction: "left" | "right";
}

const Arrow = ({ color, direction }: Arrow) => {
  const rotation = direction === "right" ? "180deg" : "0deg";
  return (
    <Svg width={24} height={26} style={{ transform: [{ rotate: rotation }] }}>
      <Polygon points="0,12 12,0 12,26" fill={color} />
    </Svg>
  );
};

export default Arrow;
