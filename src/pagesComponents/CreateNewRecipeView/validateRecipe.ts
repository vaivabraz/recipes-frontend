export default function validateRecipe(values) {
  type ErrorField = {
    title: string;
    preparation: string;
  };

  const errors = {} as ErrorField;

  if (!values.title) {
    errors.title = "Pavadinimas turi but uzpildytas";
  }
  // else if (galima patikrinti kitus dalykus susijusius su pavadinimu, tarkim ar simboliai yra leistini)

  if (!values.preparation) {
    errors.preparation = "Aprasymas turi buti uzpildytas";
  }
  //else if patikrintu kitus dalykus susijusius su description (jei butu pass, tikrintumem ar geras ilgis pvx.)
  //gal padaryti switch? labai aiskiai atskirtu kam kokios taisykles galioja
  return errors;
}
