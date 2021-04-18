import React from "react";
import styled from "styled-components";

import { FullRecipeType } from "../../types";
import { Row, Column, Button, TextSection, Text, HSpace } from "../../ui";

import CategoriesList from "./CategoriesList";
import IngredientsListView from "./IngredientsListView";
import RecipeTime from "./RecipeTime";

type FullRecipeViewProps = {
  recipe: FullRecipeType;
};

const FullRecipeView = ({ recipe }: FullRecipeViewProps) => {
  const image = recipe.image || "/salad.jpg";
  //TODO: change alignment on small screens
  //TODO: add ability to show separated times
  //TODO: add ability to show preparation steps
  //TODO: image is not correct

  return (
    <Container>
      <Row>
        <TitleContainer>
          <Text type="h2" text={recipe.title} />
          <Text text={recipe.summary} />
        </TitleContainer>
      </Row>
      <Row>
        <LeftColumn large={5}>
          <Image src={image} title={recipe.title} alt={recipe.title} />
          <Info>
            {recipe.portions && (
              <>
                <Text type="h5" text="PORCIJU SKAIČIUS: " />
                <Text text={recipe.portions} />
              </>
            )}
            {recipe.time && <RecipeTime time={recipe.time} />}
          </Info>
        </LeftColumn>
        <RightColumn large={7}>
          <IngredientsListView ingredients={recipe.ingredients} />
          <TextSection title="PARUOŠIMAS: " text={recipe.preparation} />
          {recipe.notes && (
            <TextSection title="PASTABOS: " text={recipe.notes} />
          )}
          <CategoriesList categories={recipe.categories} />
          <BottomContainer>
            <Row>
              <Text type="h5" text="AUTORIUS: " />
              <HSpace />
              <a href="">
                <Text text={recipe.author} color="accent" />
              </a>
            </Row>
            <ButtonsBox>
              <Button onClick={() => {}} text="Redaguoti" />
              <HSpace />
              <Button onClick={() => {}} text="Istrinti" />
            </ButtonsBox>
          </BottomContainer>
        </RightColumn>
      </Row>
    </Container>
  );
};

export default FullRecipeView;

const Container = styled(Column)`
  border: var(--BorderLine);
`;

const TitleContainer = styled(Column)`
  align-items: center;
`;

const LeftColumn = styled(Column)`
  align-items: flex-end;
  padding-left: 1rem;
`;

const RightColumn = styled(Column)`
  padding-left: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  min-width: 250px;
  margin-bottom: 1rem;
  border: var(--BorderLine);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1rem 0;
`;

const BottomContainer = styled.div`
  padding-top: 40px;
`;

const ButtonsBox = styled.div`
  display: flex;
  padding-top: 8px;
`;
