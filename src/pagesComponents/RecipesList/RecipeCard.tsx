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
  padding-top: 30px;
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 9px;
  margin: 0 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid var(--tuscan-red);
  border-radius: 12px;
  background-color: white;
  position: absolute;
  right: 0;
  left: 0;
  max-height: 90px;
`;

export default React.memo(RecipeCard);
