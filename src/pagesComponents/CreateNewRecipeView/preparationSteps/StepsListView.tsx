import React from "react";
import { Button } from "@mui/material";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

import { StepsListItemType } from "../../../types";
import Step from "./Step";

type Props = {
  stepsList: StepsListItemType[];
  handleChangeStep: (event, id, groupIndex) => void;
  handleRemoveStep: (event, id, groupIndex) => void;
  handleAddStep: (event, groupIndex) => void;
  groupIndex: Number;
};

const StepsListView = ({
  stepsList,
  handleChangeStep,
  handleRemoveStep,
  handleAddStep,
  groupIndex,
}: Props) => {
  const handleAddStepClick = (event) => {
    handleAddStep(event, groupIndex);
  };

  return (
    <>
      {stepsList.map((item, index) => (
        <Step
          key={index}
          index={index}
          entry={item}
          onChange={handleChangeStep}
          onRemove={handleRemoveStep}
        />
      ))}
      <Button
        startIcon={<AddCircleOutlineSharpIcon />}
        onClick={handleAddStepClick}
        sx={{ justifyContent: "flex-start", marginLeft: "9px" }}
      >
        Pridėti zingsni
      </Button>
    </>
  );
};

export default React.memo(StepsListView);
