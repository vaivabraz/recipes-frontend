import React from "react";
import styled from "styled-components";

import { StepsListItemType } from "../../../types";
import PlusButton from "../../../asset/svg/PlusButton";
import { ButtonSvg } from "../../../ui";

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

      <AddStepButton
        onClick={handleAddStepClick}
        Icon={PlusButton}
        text="Pridėti zingsni"
      />
    </>
  );
};

export default React.memo(StepsListView);

const AddStepButton = styled(ButtonSvg)`
  padding-left: 1rem;
`;
