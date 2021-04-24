import React from "react";
import styled from "styled-components";

import useFormValidation from "../../utils/useFormValidation";
import { NewFullRecipeType } from "../../types";
import { Row, Column, Text, BREAKPOINTS, Button } from "../../ui";
import RecipeForm from "./RecipeForm";
import { initialRecipe } from "./initialRecipe";
import validateRecipe from "./validateRecipe";

type FullRecipeViewProps = {
  recipe?: NewFullRecipeType;
};

const CreateRecipeView = ({ recipe }: FullRecipeViewProps) => {
  const {
    handleSubmit,
    handleChange,
    handleCustomChange,
    handleBlur,
    values,
    errors,
  } = useFormValidation<NewFullRecipeType>(initialRecipe, validateRecipe, () =>
    console.log("submit! ups!")
  );

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
            handleChange={handleChange}
            handleCustomChange={handleCustomChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
          />
        </RightColumn>
      </Content>
      <ButtonContainer>
        <Button disabled={false} text="Sukurti" onClick={handleSubmit} />
      </ButtonContainer>
    </Container>
  );
};

export default CreateRecipeView;

const Container = styled(Column)`
  @media (min-width: ${BREAKPOINTS.small}) {
    border: var(--BorderLine);
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
  border: var(--BorderLine);
  padding: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
