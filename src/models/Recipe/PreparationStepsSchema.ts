import pkg from 'mongoose';
const { Schema } = pkg;

export type PreparationStepsInRecipeType = {
  groupPreparationSteps: Boolean;
  stepsGroups: StepsGroupsType[];
  stepsList: StepsListItemType[];
};

type StepsGroupsType = {
  groupName: string;
  index: number;
};

type StepsListItemType = {
  step: string;
  groupIndex: number;
};

const StepsGroup = new Schema<StepsGroupsType>({
  groupName: { type: String },
  index: { type: Number },
});

const Step = new Schema<StepsListItemType>({
  step: { type: String },
  groupIndex: { type: Number },
});

export const PreparationStepsSchema = new Schema<PreparationStepsInRecipeType>({
  groupPreparationSteps: { type: Boolean, default: false },
  stepsGroups: [StepsGroup],
  stepsList: [Step],
});
