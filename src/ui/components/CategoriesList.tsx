import React, { useState } from "react";
import styled from "styled-components";
import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Link } from ".";

interface CategoriesListProps {
  categoriesList: ListItem[];
}

type ListItem = {
  id: string;
  title: string;
};

export const CategoriesList: React.FC<CategoriesListProps> = ({
  categoriesList,
}) => {
  const [isCategoriesListOpen, setIsCategoriesListOpen] = useState(false);

  const handleCategoriesOpenToggle = () => {
    setIsCategoriesListOpen((prev) => !prev);
  };

  return (
    <Container>
      <div>
        <ButtonStyled
          variant="text"
          endIcon={
            isCategoriesListOpen ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )
          }
          onClick={handleCategoriesOpenToggle}
          style={{ backgroundColor: "transparent" }}
          disableRipple
        >
          Kategorijos
        </ButtonStyled>
      </div>
      {isCategoriesListOpen && (
        <ListContainer>
          {categoriesList.map((i) => (
            <Link
              href={"/recipes?categories=" + i.id}
              title={i.title}
              key={i.id}
            ></Link>
          ))}
        </ListContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-bottom: 6px;
`;

const ButtonStyled: ExtendButtonBase<ButtonTypeMap<{}, "button">> = styled(
  Button
)`
  && {
    margin-left: -8px;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  padding: 12px 0;
  gap: 8px;
  border: var(--BorderLine);
  border-radius: 4px;
`;
