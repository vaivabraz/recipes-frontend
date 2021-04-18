import styled from "styled-components";

import useFormValidation from "../../utils/useFormValidation";
import { Input, Button, Row, BREAKPOINTS } from "../../ui";

import validateRecipe from "./validateRecipe";
import Ingredients from "./ingredients/Ingredients";
import PreparationSteps from "./preparationSteps/PreparationSteps";
import Time from "./preparationTime/Time";

type RecipeFormProps = {
  handleSubmitForm: (e: any) => void;
  initialRecipe: any;
};

const RecipeForm = ({ initialRecipe, handleSubmitForm }: RecipeFormProps) => {
  const {
    handleSubmit,
    handleChange,
    handleCustomChange,
    handleBlur,
    values,
    errors,
  } = useFormValidation(initialRecipe, validateRecipe, handleSubmitForm);

  //atpazinti linkus!
  //prideti private/public

  return (
    <InputBox>
      <Input
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
      <div>
        <Button disabled={false} text="Sukurti" onClick={handleSubmit} />
      </div>
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
