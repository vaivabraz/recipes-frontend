import React from "react";
import styled from "styled-components";
import { Button, Box, IconButton, TextField } from "@mui/material";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";
import { PreparationStepsInRecipeType } from "../../../types";
import StepsListView from "./StepsListView";

type Props = {
  steps: PreparationStepsInRecipeType;
  handleChangeStep: (event, id, groupIndex) => void;
  handleRemoveStep: (event, id, groupIndex) => void;
  handleAddStep: (event, groupIndex) => void;
  onChange: (key: string, value: PreparationStepsInRecipeType) => void;
};

const StepsGroupedView = ({
  steps,
  handleChangeStep,
  handleRemoveStep,
  handleAddStep,
  onChange,
}: Props) => {
  const handleChangeGroupName = ({ target }) => {
    const index = parseInt(target.name);
    const lineToChange = steps.stepsGroups.find((i) => i.index === index);
    const changedLine = {
      ...lineToChange,
      groupName: target.value,
    };
    const groupsCopy = steps.stepsGroups.slice();
    const updatedGroups = groupsCopy.map((i) =>
      i.index === index ? changedLine : i
    );
    onChange("preparation", {
      ...steps,
      stepsGroups: updatedGroups,
    });
  };

  const handleAddGroup = (event) => {
    event.preventDefault();
    const groupsCopy = steps.stepsGroups.slice();
    const groupIndexArray = groupsCopy.map((a) => a.index);
    const highestGroupIndex =
      groupIndexArray.length > 0
        ? groupIndexArray.reduce((highest, current) =>
            current > highest ? current : highest
          )
        : 0;
    groupsCopy.push({
      groupName: "",
      index: highestGroupIndex + 1,
    });

    const stepsCopy = steps.stepsList.slice();
    stepsCopy.push({
      step: "",
      groupIndex: highestGroupIndex + 1,
    });
    onChange("preparation", {
      ...steps,
      stepsList: stepsCopy,
      stepsGroups: groupsCopy,
    });
  };

  const onRemoveGroup = (event, index) => {
    event.preventDefault();

    if (steps.stepsGroups.length === 1) {
      const updatedSteps = steps.stepsList.map((i) => {
        return { ...i, groupIndex: 0 };
      });
      return onChange("preparation", {
        stepsList: updatedSteps,
        stepsGroups: [
          {
            groupName: "",
            index: 0,
          },
        ],
        groupPreparationSteps: false,
      });
    }
    const remainingGroups = steps.stepsGroups.filter((i) => i.index !== index);
    const indexArray = remainingGroups.map((a) => a.index);
    const highestGroupIndex =
      indexArray.length > 0
        ? indexArray.reduce((highest, current) =>
            current > highest ? current : highest
          )
        : 0;
    const updatedSteps = steps.stepsList.map((i) =>
      i.groupIndex === index ? { ...i, groupIndex: highestGroupIndex } : i
    );
    onChange("preparation", {
      ...steps,
      stepsList: updatedSteps,
      stepsGroups: remainingGroups,
    });
  };

  return (
    <>
      {steps.stepsGroups.map((i) => (
        <GroupedView key={i.index}>
          <Box display="flex">
            <TextField
              size="small"
              placeholder="Grupes pavadinimas"
              value={i.groupName}
              onChange={handleChangeGroupName}
              name={i.index.toString()}
              autoComplete="off"
              sx={{ m: "6px 0", display: "flex", flex: 1 }}
            />
            <IconButton
              aria-label="remove"
              onClick={(event) => onRemoveGroup(event, i.index)}
              color="primary"
              sx={{ margin: "6px 0", padding: "0", width: "40px" }}
              size="large"
            >
              <RemoveCircleOutlineSharpIcon />
            </IconButton>
          </Box>
          <StepsListView
            stepsList={steps.stepsList.filter(
              (line) => line.groupIndex === i.index
            )}
            handleChangeStep={handleChangeStep}
            handleRemoveStep={handleRemoveStep}
            handleAddStep={handleAddStep}
            groupIndex={i.index}
          />
        </GroupedView>
      ))}
      <Button
        startIcon={<AddCircleOutlineSharpIcon />}
        onClick={handleAddGroup}
        sx={{ justifyContent: "flex-start" }}
      >
        Pridėti grupę
      </Button>
    </>
  );
};

export default React.memo(StepsGroupedView);

const GroupedView = styled.div`
  padding-bottom: 1rem;
`;
