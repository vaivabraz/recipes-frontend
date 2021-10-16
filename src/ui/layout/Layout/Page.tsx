import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../utils";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

const Page: React.FC = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ScreenContainer>
      {matches && (
        <>
          <HeaderRow />
          <PostHeaderRow />
        </>
      )}
      <ContentContainer>{children}</ContentContainer>
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

const HeaderRow = styled.div`
  height: 90px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  margin-top: -112px;
  margin-bottom: 30px;
  margin-right: 90px;
  margin-left: 90px;
  border-radius: 6px;
  background-color: var(--BackgroundLight);
  @media (max-width: ${BREAKPOINTS.medium}) {
    margin-right: 45px;
    margin-left: 45px;
  }
  @media (max-width: ${BREAKPOINTS.small}) {
    margin: 0;
  }
`;

export default Page;
