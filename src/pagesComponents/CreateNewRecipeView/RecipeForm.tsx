import { TextField } from "@mui/material";
import styled from "styled-components";

import { NewFullRecipeType } from "../../types";
import { Input, Row, BREAKPOINTS } from "../../ui";

import Ingredients from "./ingredients/Ingredients";
import PreparationSteps from "./preparationSteps/PreparationSteps";
import Time from "./preparationTime/Time";

type RecipeFormProps = {
  handleChange: any;
  handleCustomChange: any;
  handleBlur: any;
  values: NewFullRecipeType;
  errors: any;
};

const RecipeForm = ({
  handleChange,
  handleCustomChange,
  handleBlur,
  values,
  errors,
}: RecipeFormProps) => {
  //atpazinti linkus!
  //prideti private/public

  return (
    <InputBox>
      <TextField
        size="small"
        label={"Pavadinimas"}
        onChange={handleChange}
        onBlur={handleBlur}
        name="title"
        value={values.title}
        error={errors?.title}
      />
      <Ingredients
        ingredients={values.ingredients}
        onChange={handleCustomChange}
      />
      <PreparationSteps
        steps={values.preparation}
        onChange={handleCustomChange}
      />
      <Input
        label={"Nuoroda"}
        onChange={handleChange}
        onBlur={handleBlur}
        name="link"
        value={values.link}
      />
      <Input
        label={"Pastabos"}
        onChange={handleChange}
        onBlur={handleBlur}
        name="notes"
        value={values.notes}
      />
      <Input
        label={"Trumpai apie recepta"}
        onChange={handleChange}
        onBlur={handleBlur}
        name="summary"
        value={values.summary}
      />

      <PortionsTimeContainer>
        <PortionsContainer>
          <Input
            label={"Porciju skaicius"}
            onChange={handleChange}
            onBlur={handleBlur}
            name="portions"
            value={values.portions}
          />
        </PortionsContainer>
        <TimeContainer>
          <Time time={values.time} onChange={handleCustomChange} />
        </TimeContainer>
      </PortionsTimeContainer>
    </InputBox>
  );
};

export default RecipeForm;

const InputBox = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const PortionsContainer = styled.div`
  display: inline;
  flex: 1;
`;
const TimeContainer = styled.div`
  display: flex;
  flex: 2;
`;

const PortionsTimeContainer = styled(Row)`
  @media (max-width: ${BREAKPOINTS.small}) {
    flex-direction: column;
  }
`;
