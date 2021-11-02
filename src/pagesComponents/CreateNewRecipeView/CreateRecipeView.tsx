import React from "react";
import styled from "styled-components";

import useFormValidation from "../../utils/useFormValidation";
import { NewFullRecipeType } from "../../types";
import { Row, Column, Text, BREAKPOINTS, Button } from "../../ui";
import RecipeForm from "./RecipeForm";
import { initialRecipe } from "./initialRecipe";
import validateRecipe from "./validateRecipe";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

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
    <Box>
      <Typography
        variant="h2"
        textAlign="center"
        paddingTop={"48px"}
        paddingBottom={"24px"}
      >
        Sukurti nauja recepta
      </Typography>
      <Box display="flex">
        <Box padding={"24px"}>
          <Text type="h5" text="Pridėti nuotraukà " />
          <AttachmentsPlaceholder />
        </Box>
        <Box padding={"24px"}>
          <RecipeForm
            handleChange={handleChange}
            handleCustomChange={handleCustomChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
          />
        </Box>
      </Box>
      <ButtonContainer>
        <Button disabled={false} text="Sukurti" onClick={handleSubmit} />
      </ButtonContainer>
    </Box>
  );
};

export default CreateRecipeView;

const SubMenuContainer = styled.div`
  min-height: 112px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 36px;
  align-items: center;
  width: 100%;
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
