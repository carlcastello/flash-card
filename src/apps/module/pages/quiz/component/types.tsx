import { FlashcardStatus } from '../../../components/flash-card/types';
import { RouteComponentProps } from 'react-router-dom';
import { IQuestionCard } from '../../../../commons/types';

import { QuizStatus } from './enum';

export interface IOwnProps extends RouteComponentProps<any> {
  questions: IQuestionCard[],
  requiredData: string[],

  fetchQuiz: (quizId: string) => void,

  classes: {
    boxContent: string,
    boxContainer: string,
    progressBarContainer: string,
    iconButton: string,
  }
}

export interface IOwnState {
  questionIndex: number,
  progressIndex: number,
  currentFlashcardStatus: FlashcardStatus,
  quizStatus: QuizStatus,
  confirmModalToogle: boolean
}