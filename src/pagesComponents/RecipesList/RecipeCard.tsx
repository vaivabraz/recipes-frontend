import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { ShortRecipeType } from "../../types";
import TagsList from "./TagsList";

interface IRecipeCard {
  recipe: ShortRecipeType;
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
  const image = recipe.image || "/soup2.jpg";
  const title = recipe.title;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link href="/recipes/[slug]" as={`/recipes/${recipe.slug}`}>
        <Box
          sx={{
            border: "none",
            backgroundColor: "transparent",
            position: "relative",
            cursor: "pointer",  
          }}
        >
          <TitleContainer>
            <Typography variant="subtitle2" textAlign="center">
              {title}
            </Typography>
          </TitleContainer>
          <Image src={image} title={title} alt={title} />
        </Box>
      </Link>
      <TagsList categories={recipe.categories} />
    </Box>
  );
};

const Image = styled.img`
  width: 100%;
  margin-top: 30px;
  border-radius: 12px;
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 9px;
  margin: 0 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: var(--BorderLine);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  border-radius: 12px;
  background-color: white;
  position: absolute;
  right: 0;
  left: 0;
  max-height: 90px;
  min-height: 42px;
`;

export default React.memo(RecipeCard);
