import { Box } from "@mui/system";

type BubbleProps = {
  radius: number;
  color: string;
  top: number;
  left: number;
};
const Bubble: React.FC<BubbleProps> = ({ radius, color, top, left }) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        position: "absolute",
        top: top,
        left: left,
      }}
    />
  );
};

export default Bubble;
