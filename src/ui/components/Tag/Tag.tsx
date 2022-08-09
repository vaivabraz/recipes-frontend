import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

type TagProps = {
  text: string;
  id?: string;
};

export const Tag: React.FC<TagProps> = ({ text, id }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/recipes?categories=" + id);
  };
  return (
    <Box
      component="button"
      onClick={id ? handleOnClick : null}
      sx={{
        border: "none",
        margin: "3px 6px",
        padding: "3px 6px",
        backgroundColor: "var(--Background)",
        color: "var(--tuscan-red)",
        cursor: id ? "pointer" : "default",
      }}
    >
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};
