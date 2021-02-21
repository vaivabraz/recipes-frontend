import React from "react";
import styled from "styled-components";
import { Colors } from "../../constants";
import { useRouter } from "next/router";
import { ShortRecipeType } from "../../types";
import { Button } from "../../ui";

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
    <Card onClick={handleOnClick}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Image src={image} title={title} alt={title} />
    </Card>
  );
};

const Card = styled(Button)`
  flex-direction: column;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 100%;
`;

const TitleContainer = styled.div`
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  ${Card}:hover & {
    color: ${Colors.AccentColor};
    font-weight: bolder;
  }
`;

export default React.memo(RecipeCard);
