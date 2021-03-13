import styled from "styled-components";

import useFormValidation from "./useFormValidation";
import { Input, Button, Row } from "../../ui";

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

  //paruosimas turetu buti imanomas isskirstyti zingsniais ir taip pat grupuoti
  //paruodimo zingsnius irgi turetu but galima sugrupuoti
  //grupuoti laika
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

      <Row>
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
      </Row>
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
  padding-top: 2px; //to align with time container
`;
const TimeContainer = styled.div`
  display: flex;
  flex: 2;
`;
