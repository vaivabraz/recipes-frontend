import React from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { BREAKPOINTS } from "../../utils";
import { Header } from "./Header";

export type PageProps = {
  withMenu?: boolean;
  rightColumn?: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children, withMenu, rightColumn }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ScreenContainer>
      <Header withMenu={withMenu} />
      <ContentContainer>
        <LeftColumnContainer>{children}</LeftColumnContainer>
        {rightColumn && (
          <RightColumnContainer>
            <TextField label="Paieska..." fullWidth />
          </RightColumnContainer>
        )}
      </ContentContainer>
    </ScreenContainer>
  );
};

const ScreenContainer = styled.div`
  background-color: var(--Background);
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  margin-top: -135px;
  margin-bottom: 30px;
  margin-right: 90px;
  margin-left: 90px;
  @media (max-width: ${BREAKPOINTS.medium}) {
    margin-right: 45px;
    margin-left: 45px;
  }
  @media (max-width: ${BREAKPOINTS.small}) {
    margin: 0;
  }
`;

const LeftColumnContainer = styled.div`
  background-color: var(--BackgroundLight);
  flex-direction: column;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const RightColumnContainer = styled.div`
  padding-left: 36px;
  width: 230px;
  height: 100%;
`;

export default Page;
