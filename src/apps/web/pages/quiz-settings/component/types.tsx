import { RouteComponentProps } from 'react-router-dom';


export interface IOwnProps extends RouteComponentProps<any> {
  isFullPageLoading: boolean,
  requiredData: string[],
  fetchQuiz: (quizId: string) => void,
  classes: {
    gridContainer: string,
  }
}

export interface IOwnState {
}