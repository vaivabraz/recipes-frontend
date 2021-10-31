import React from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { BREAKPOINTS } from "../../utils";
import Navbar from "./NavBar";

export type PageProps = {
  withMenu?: boolean;
  rightColumn?: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children, withMenu, rightColumn }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ScreenContainer>
      {matches && (
        <>
          {withMenu ? <Navbar /> : <EmptyHeaderRow />}
          <PostHeaderRow />
          {withMenu && (
            <>
              <Box
                sx={{
                  backgroundColor: "var(--tuscan-red)",
                  width: "68px",
                  height: "68px",
                  borderRadius: "34px",
                  position: "absolute",
                  top: "60px",
                  left: "130px",
                }}
              />
              <Box
                sx={{
                  backgroundColor: "var(--new-york-pink)",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                  position: "absolute",
                  top: "80px",
                  left: "210px",
                }}
              />
            </>
          )}
        </>
      )}
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
  flex-direction: column;
  height: 100%;
  margin: 0;
`;

const EmptyHeaderRow = styled.div`
  height: 30px;
`;

const PostHeaderRow = styled.div`
  height: 168px;
  background-image: linear-gradient(
    to bottom right,
    var(--BackgroundDark),
    var(--Secondary)
  );
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  margin-top: -112px;
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
  justify-content: center;
  align-items: center;
`;

const RightColumnContainer = styled.div`
  padding-left: 36px;
  width: 324px;
  height: 100%;
`;

export default Page;
