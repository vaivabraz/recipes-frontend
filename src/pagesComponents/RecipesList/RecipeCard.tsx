import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { ShortRecipeType } from "../../types";
import TagsList from "./TagsList";

interface IRecipeCard {
  recipe: ShortRecipeType;
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
  const router = useRouter();
  const image = recipe.image || "/salad.jpg";
  const title = recipe.title;

  const handleOnClick = () => {
    router.replace(`/recipes/${recipe.slug}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="button"
        onClick={handleOnClick}
        sx={{
          border: "none",
          backgroundColor: "transparent",
          position: "relative",
        }}
      >
        <TitleContainer>
          <Typography variant="subtitle2" textAlign="center">
            {title}
          </Typography>
        </TitleContainer>
        <Image src={image} title={title} alt={title} />
      </Box>
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
