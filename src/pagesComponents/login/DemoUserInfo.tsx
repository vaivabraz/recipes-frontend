import { Box, Typography } from "@mui/material";

export const DemoUserInfo = () => (
  <Box
    sx={{
      backgroundColor: "#CC8B86",
      height: "210px",
      width: "210px",
      borderRadius: "105px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      right: {
        xs: "unset",
        sm: "-160px",
      },
      top: {
        xs: "315px",
        sm: "99px",
      },
      justifyContent: "center",
    }}
  >
    <Typography variant="subtitle1">Demo useris</Typography>
    <Typography variant="body2">demoUser@demo.com</Typography>
    <Typography variant="body2">demo1234</Typography>
  </Box>
);
