import { Typography } from "@mui/material";
import { PrivatePage } from "../ui";

export default function Planner() {
  return (
    <PrivatePage withMenu>
      Cia bus: 1. aplinka kaupti uzrasams, prideti kelis default uzrasus su
      saltiniias (pvz kiek laiko kepti skirtingas darzoves )
      <Typography variant="h1">typography h1</Typography>
      <Typography variant="h2">typography h2</Typography>
      <Typography variant="h3">typography h3</Typography>
      <Typography variant="h4">typography h4</Typography>
      <Typography variant="h5">typography h5</Typography>
      <Typography variant="h6">typography h6</Typography>
      <Typography variant="body1">typography body1</Typography>
      <Typography variant="body2">typography body2</Typography>
      <Typography variant="subtitle1">typography subtitle1</Typography>
      <Typography variant="subtitle2">typography subtitle2</Typography>
    </PrivatePage>
  );
}
