import React from "react";
import { Typography, Box } from "@mui/material";
import { PreparationStepsInRecipeType, StepsListItemType } from "../../types";
import { TextSection } from "../../ui";

const StepsListGrouped: React.FC<PreparationStepsViewProps> = ({ steps }) => {
  return (
    <Box paddingLeft="24px">
      {steps.stepsGroups.map((g) => (
        <>
          <Typography variant="h5">{g.groupName}</Typography>
          <StepsList
            stepsList={steps.stepsList.filter((a) => a.groupIndex === g.index)}
          />
        </>
      ))}
    </Box>
  );
};

type StepsListProps = {
  stepsList: StepsListItemType[];
};

const StepsList: React.FC<StepsListProps> = ({ stepsList }) => {
  return (
    <Box paddingLeft="24px">
      {stepsList.map((i) => (
        <Box display="flex" paddingBottom="9px" key={i.groupIndex}>
          <Typography variant="body1" paddingRight="9px">
            {i.groupIndex}
          </Typography>
          <Typography variant="body1">{i.step}</Typography>
        </Box>
      ))}
    </Box>
  );
};

type PreparationStepsViewProps = {
  steps: PreparationStepsInRecipeType;
};

const PreparationStepsView: React.FC<PreparationStepsViewProps> = ({
  steps,
}) => {
  if (!steps?.stepsList.length) {
    return null;
  }

  return (
    <TextSection title="PARUOŠIMAS: ">
      {steps.groupPreparationSteps ? (
        <StepsListGrouped steps={steps} />
      ) : (
        <StepsList stepsList={steps.stepsList} />
      )}
    </TextSection>
  );
};
export default PreparationStepsView;
