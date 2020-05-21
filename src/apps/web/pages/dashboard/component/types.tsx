import { IQuizSummary } from "../../../../commons/types";
import { RouteComponentProps } from "react-router-dom";


export interface IOwnProps extends RouteComponentProps<any> {
  requiredData: string[],
  createdQuizes: IQuizSummary[],
  fetchCreatedQuizes: () => void,
  classes: {
    gridContainer: string
  }
};

export interface IOwnState {

};