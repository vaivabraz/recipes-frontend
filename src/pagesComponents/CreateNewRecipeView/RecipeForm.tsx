import styled from "styled-components";

import useFormValidation from "./useFormValidation";
import { Input, Button } from "../../ui";

import validateRecipe from "./validateRecipe";
import Ingredients from "./ingredients/Ingredients";
import PreparationSteps from "./preparationSteps/PreparationSteps";

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
        name="description1"
        value={values.notes}
      />
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
