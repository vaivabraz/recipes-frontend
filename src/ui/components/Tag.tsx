import { Typography } from "@mui/material";
import { Box } from "@mui/system";

type TagProps = {
  text: string;
};

const Tag: React.FC<TagProps> = ({ text }) => {
  const handleOnClick = () => {
    //filter recipes by tag
  };
  return (
    <Box
      component="button"
      onClick={handleOnClick}
      sx={{
        border: "none",
        margin: "3px 6px",
        padding: "3px 6px",
        backgroundColor: "var(--Background)",
        color: "var(--tuscan-red)",
      }}
    >
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default Tag;
