import React from "react";
import styled from "styled-components";

import { Colors } from "../../constants";
import { FullRecipeType } from "../../types";
import { Row, Column, Text, BREAKPOINTS } from "../../ui";
import RecipeForm from "./RecipeForm";
import { initialRecipe } from "./initialRecipe";

type FullRecipeViewProps = {
  recipe?: FullRecipeType;
};

const CreateRecipeView = ({ recipe }: FullRecipeViewProps) => {
  return (
    <Container responsive={true}>
      <Row>
        <TitleContainer>
          <Text type="h2" text="Sukurti nauja recepta" />
        </TitleContainer>
      </Row>
      <Content>
        <LeftColumn small={12} medium={4} responsive={true}>
          <Text type="h5" text="Pridėti nuotraukà " />
          <AttachmentsPlaceholder />
        </LeftColumn>
        <RightColumn small={12} medium={8} responsive={true}>
          <RecipeForm
            initialRecipe={initialRecipe}
            handleSubmitForm={() => console.log("submit! ups!")}
          />
        </RightColumn>
      </Content>
    </Container>
  );
};

export default CreateRecipeView;

const Container = styled(Column)`
  @media (min-width: ${BREAKPOINTS.small}) {
    border: 1px ${Colors.Border} solid;
  }
`;
const Content = styled(Row)`
  flex-direction: column-reverse;
  @media (min-width: ${BREAKPOINTS.medium}) {
    flex-direction: initial;
  }
`;

const TitleContainer = styled(Column)`
  align-items: center;
`;

const LeftColumn = styled(Column)`
  align-items: center;
`;

const RightColumn = styled(Column)``;

const AttachmentsPlaceholder = styled.div`
  height: 200px;
  width: 200px;
  border: 1px ${Colors.Border} solid;
  padding: 3rem;
`;
