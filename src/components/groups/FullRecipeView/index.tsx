import React from "react";
import styled from "styled-components";

import { Colors } from "../../../constants";
import { FullRecipe } from "../../../types";
import { Button, TextSection } from "../../components";
import CategoriesList from "./CategoriesList";
import IngredientsList from "./IngredientsList";

type FullRecipeViewProps = {
  recipe: FullRecipe;
};

const FullRecipeView = ({ recipe }: FullRecipeViewProps) => {
  const image = recipe.image || "/salad.jpg";

  return (
    <div>
      <Title>
        <h1>{recipe.title}</h1>
      </Title>
      <Body>
        <LeftColumn>
          <Image src={image} title={recipe.title} alt={recipe.title} />
          <Info>
            {recipe.portions && (
              <div>
                <h5>Porciju skaicius: </h5>
                <p>{recipe.portions}</p>
              </div>
            )}
            {recipe.time && (
              <div>
                <h5>Uztruks laiko: </h5>
                <p>{recipe.time}</p>
              </div>
            )}
          </Info>
        </LeftColumn>
        <RightColumn>
          <IngredientsList ingredients={recipe.ingredients} />
          <TextSection title="Paruosimas: " text={recipe.preparation} />
          {recipe.notes && (
            <TextSection title="Pastabos: " text={recipe.notes} />
          )}
          <CategoriesList categories={recipe.categories} />
          <BottomContainer>
            <Author>
              <h5>{"Autorius: "}</h5>
              <a href="">
                <p>{recipe.author}</p>
              </a>
            </Author>
            <ButtonsBox>
              <Button size="small" action={() => {}} text="Redaguoti" />
              <Separator />
              <Button size="small" action={() => {}} text="Istrinti" />
            </ButtonsBox>
          </BottomContainer>
        </RightColumn>
      </Body>
    </div>
  );
};

export default FullRecipeView;

const Title = styled.div`
  padding: 1rem 6rem 3rem;
`;

const Body = styled.div`
  display: flex;
  margin: 0 3rem;
  flex-wrap: wrap;
`;
const LeftColumn = styled.div`
  flex: 3;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const RightColumn = styled.div`
  flex: 5;
  padding-left: 3rem;
  flex-wrap: wrap;
`;

const Image = styled.img`
  max-width: 100%;
  min-width: 250px;
  margin-bottom: 1rem;
  border: 1px ${Colors.Border} solid;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1rem 0;
  div {
    display: flex;
    padding: 0.3rem 0;
  }
  h5 {
    font-weight: bolder;
  }
  p {
    padding-top: 2px; //bolder font lowers slightly
    margin-left: 0.5rem;
  }
`;

const BottomContainer = styled.div`
  padding-top: 40px;
`;

const Author = styled.div`
  h5 {
    font-weight: bolder;
    display: inline-block;
  }
  p {
    padding-left: 0.5rem;
    display: inline-block;
    color: ${Colors.ActiveColor};
  }
`;

const ButtonsBox = styled.div`
  display: flex;
  padding-top: 8px;
`;

const Separator = styled.div`
  margin-right: 1rem;
`;
