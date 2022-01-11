import { TextField, Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { NewFullRecipeType } from "../../types";
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box display="flex" flexDirection={matches ? "row" : "column-reverse"}>
      <Box
        flex={2}
        padding={"24px"}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h5">Pridėti nuotraukà</Typography>
        <Box height={"200px"} width={"200px"} border={"var(--BorderLine)"} />
        <TextField
          size="small"
          margin="dense"
          label="Porciju skaicius"
          onChange={handleChange}
          onBlur={handleBlur}
          name="portions"
          value={values.portions}
          sx={{ paddingBottom: "9px" }}
        />
        <Time time={values.time} onChange={handleCustomChange} />
      </Box>
      <Box flex={3} padding={"24px"}>
        <TextField
          size="small"
          margin="dense"
          fullWidth
          label="Pavadinimas"
          onChange={handleChange}
          onBlur={handleBlur}
          name="title"
          value={values.title}
          error={errors?.title}
          sx={{ paddingBottom: "9px" }}
        />
        <Ingredients
          ingredients={values.ingredients}
          onChange={handleCustomChange}
        />
        <PreparationSteps
          steps={values.preparation}
          onChange={handleCustomChange}
        />

        <TextField
          size="small"
          margin="dense"
          fullWidth
          label="Nuoroda"
          onChange={handleChange}
          onBlur={handleBlur}
          name="link"
          value={values.link}
        />
        <TextField
          size="small"
          margin="dense"
          fullWidth
          label="Pastabos"
          onChange={handleChange}
          onBlur={handleBlur}
          name="notes"
          value={values.notes}
        />
        <TextField
          size="small"
          margin="dense"
          fullWidth
          label="Trumpai apie recepta"
          onChange={handleChange}
          onBlur={handleBlur}
          name="summary"
          value={values.summary}
        />
      </Box>
    </Box>
  );
};

export default RecipeForm;
