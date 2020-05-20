import { IFlashCard } from '../../../../commons/types';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  quizId?: string,
}

export interface IOwnProps extends RouteComponentProps<MatchParams>{
  title: string,
  description: string,
  flashCards: IFlashCard[],
  fetchQuiz: (quizId: string) => void,
  saveQuizSummary: () => void,
  saveCreatedQuestion: () => void,
  classes: {
    questionBoxContainer: string,
    gridContainer: string
  }
}

export interface IOwnState {
  isAddQuestion: boolean
}