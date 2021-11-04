import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

import { PreparationStepsInRecipeType } from "../../../types";
import StepsListView from "./StepsListView";
import StepsGroupedView from "./StepsGroupedView";

type Props = {
  steps: PreparationStepsInRecipeType;
  onChange: (key: string, value: PreparationStepsInRecipeType) => void;
};

const PreparationSteps = ({ steps, onChange }: Props) => {
  const handleChangeStep = ({ target }, index, groupIndex) => {
    const allStepsCopy = steps.stepsList.slice();
    let updatedStepsList;
    if (steps.groupPreparationSteps) {
      const currentGroupStepsCopy = allStepsCopy.filter(
        (i) => i.groupIndex === groupIndex
      );
      const otherGroupsStepsCopy = allStepsCopy.filter(
        (i) => i.groupIndex !== groupIndex
      );
      currentGroupStepsCopy[index].step = target.value;
      updatedStepsList = [...otherGroupsStepsCopy, ...currentGroupStepsCopy];
    } else {
      allStepsCopy[index].step = target.value;
      updatedStepsList = allStepsCopy;
    }

    onChange("preparation", {
      ...steps,
      stepsList: updatedStepsList,
    });
  };

  const handleRemoveStep = (event, index, groupIndex) => {
    event.preventDefault();
    const allStepsCopy = steps.stepsList.slice();
    let updatedStepsList;
    if (steps.groupPreparationSteps) {
      const currentGroupStepsCopy = allStepsCopy.filter(
        (i) => i.groupIndex === groupIndex
      );
      const otherGroupsStepsCopy = allStepsCopy.filter(
        (i) => i.groupIndex !== groupIndex
      );

      currentGroupStepsCopy.splice(index, 1);
      updatedStepsList = [...otherGroupsStepsCopy, ...currentGroupStepsCopy];
    } else {
      allStepsCopy.splice(index, 1);
      updatedStepsList = allStepsCopy;
    }

    onChange("preparation", {
      ...steps,
      stepsList: updatedStepsList,
    });
  };

  const handleAddStep = (event, groupIndex) => {
    event.preventDefault();
    const stepsCopy = steps.stepsList.slice();
    stepsCopy.push({
      step: "",
      groupIndex: groupIndex,
    });
    onChange("preparation", {
      ...steps,
      stepsList: stepsCopy,
    });
  };

  const handleGroupButton = (event, shouldShowGroups) => {
    event.preventDefault();
    onChange("preparation", {
      ...steps,
      groupPreparationSteps: shouldShowGroups,
    });
  };

  const groupsIngredientsButtonProps = steps.groupPreparationSteps
    ? {
        text: "Nebegrupuoti",
        onClick: (e) => handleGroupButton(e, false),
      }
    : {
        text: "Grupuoti",
        onClick: (e) => handleGroupButton(e, true),
      };

  return (
    <Box display="flex" flexDirection="column" paddingBottom={"9px"}>
      <Box display="flex" alignItems="center">
        <Typography variant="h5">Paruosimas</Typography>
        <Button onClick={groupsIngredientsButtonProps.onClick}>
          {groupsIngredientsButtonProps.text}
        </Button>
      </Box>

      {steps.groupPreparationSteps ? (
        <StepsGroupedView
          steps={steps}
          handleChangeStep={handleChangeStep}
          handleRemoveStep={handleRemoveStep}
          handleAddStep={handleAddStep}
          onChange={onChange}
        />
      ) : (
        <StepsListView
          stepsList={steps.stepsList}
          groupIndex={0}
          handleChangeStep={handleChangeStep}
          handleRemoveStep={handleRemoveStep}
          handleAddStep={handleAddStep}
        />
      )}
    </Box>
  );
};

export default React.memo(PreparationSteps);
