import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { ShortRecipeType } from "../../types";
import TagsList from "./TagsList";

interface IRecipeCard {
  recipe: ShortRecipeType;
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
  const image = recipe.image || "/soup2.jpg";
  const title = recipe.title;
  return (
    <Container>
      <Link href="/recipes/[slug]" as={`/recipes/${recipe.slug}`}>
        <>
          <Image src={image} title={title} alt={title} />
          <Information>
            <h5>{title}</h5>
            <TagsList categories={recipe.categories} />
          </Information>
        </>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: var(--BorderLine);
  background-color: white;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  border-radius: 6px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Information = styled.div`
  padding: 12px 24px 24px;
`;

export default React.memo(RecipeCard);
