import { IQuizSummaryCard } from "../../../../commons/types";
import { RouteComponentProps } from "react-router-dom";


export interface IOwnProps extends RouteComponentProps<any> {
  isFullPageLoading: boolean,
  requiredData: string[],
  createdQuizes: IQuizSummaryCard[],
  fetchCreatedQuizes: () => Promise<any>,
  classes: {
    gridContainer: string,
  }
};

export interface IOwnState {

};