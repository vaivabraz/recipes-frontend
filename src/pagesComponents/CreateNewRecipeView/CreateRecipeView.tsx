import React from "react";
import styled from "styled-components";

import { Colors } from "../../constants";
import { FullRecipeType } from "../../types";
import { Row, Column, Text } from "../../ui";
import RecipeForm from "./RecipeForm";
import { initialRecipe } from "./initialRecipe";

type FullRecipeViewProps = {
  recipe?: FullRecipeType;
};

const CreateRecipeView = ({ recipe }: FullRecipeViewProps) => {
  return (
    <Container>
      <Row>
        <TitleContainer>
          <Text type="h2" text="Sukurti nauja recepta" />
        </TitleContainer>
      </Row>
      <Row>
        <LeftColumn large={4}>
          <Text type="h5" text="Pridėti nuotraukà " />
          <AttachmentsPlaceholder />
        </LeftColumn>
        <RightColumn large={8}>
          <RecipeForm
            initialRecipe={initialRecipe}
            handleSubmitForm={() => console.log("submit! ups!")}
          />
        </RightColumn>
      </Row>
    </Container>
  );
};

export default CreateRecipeView;

const Container = styled(Column)`
  border: 1px ${Colors.Border} solid;
`;

const TitleContainer = styled(Column)`
  align-items: center;
`;

const LeftColumn = styled(Column)`
  align-items: center;
  padding-left: 1rem;
`;

const RightColumn = styled(Column)`
  padding-left: 1rem;
`;

const AttachmentsPlaceholder = styled.div`
  height: 200px;
  width: 200px;
  border: 1px ${Colors.Border} solid;
  padding: 3rem;
`;
