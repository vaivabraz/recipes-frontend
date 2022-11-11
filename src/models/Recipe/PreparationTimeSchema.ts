import pkg from 'mongoose';
const { Schema } = pkg;

export type PreparationTimeInRecipeType = {
  splitTime: boolean;
  totalTime: string;
  timeRanges: PreparationTimeRangeType[];
};

type PreparationTimeRangeType = {
  processName: string;
  time: string;
};

const TimeRange = new Schema<PreparationTimeRangeType>({
  processName: { type: String },
  time: { type: String },
});

export const PreparationTimeSchema = new Schema<PreparationTimeInRecipeType>({
  splitTime: { type: Boolean, default: false },
  totalTime: { type: String },
  timeRanges: [TimeRange],
});
