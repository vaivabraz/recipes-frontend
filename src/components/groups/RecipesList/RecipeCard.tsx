import React from "react";
import styled from "styled-components";
import { Colors } from "../../../constants";
import { useRouter } from "next/router";
import { ShortRecipe } from "../../../types";

interface IRecipeCard {
  recipe: ShortRecipe;
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
  const router = useRouter();
  const image = recipe.image || "/salad.jpg";
  const title = recipe.title;

  const handleOnClick = () => {
    router.replace(`/recipes/${recipe.slug}`);
  };
  return (
    <Card onClick={handleOnClick}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Image src={image} title={title} alt={title} />
    </Card>
  );
};

const Card = styled.button`
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.4s;

  background-color: ${Colors.Background};
  border: 1px ${Colors.Border} solid;
  width: 21rem;
  height: 30rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    border: 1px ${Colors.BorderDarker} solid;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const TitleContainer = styled.div`
  height: 7.5rem;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Title = styled.p`
  ${Card}:hover & {
    color: ${Colors.AccentColor};
    font-weight: bolder;
  }
`;

export default React.memo(RecipeCard);
