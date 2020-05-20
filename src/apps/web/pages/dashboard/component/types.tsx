import { IQuizSummary } from "../../../../commons/types";


export interface IOwnProps {
  createdQuizes: IQuizSummary[],
  fetchCreatedQuizes: () => void,
  classes: {
    gridContainer: string
  }
};

export interface IOwnState {

};