import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import Link from "next/link";

const SubMenu = () => (
  <SubMenuContainer>
    <Typography variant="h2" textAlign="center">
      Receptai
    </Typography>
    <Link href="/recipes/createNewRecipe">
      <Button variant="contained">Sukurti nauja</Button>
    </Link>
  </SubMenuContainer>
);

const SubMenuContainer = styled.div`
  min-height: 112px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 36px;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 940px) {
  }
`;

export default SubMenu;
