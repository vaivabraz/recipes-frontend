
import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export const useScreenSizeUp =(breakpoint: Breakpoint)=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up(breakpoint));
  return matches
}