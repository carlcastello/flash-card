import { connect } from 'react-redux';
import QuizSettings from './component';

import { IReduxState } from '../../../types';

import {
  fetchQuiz,
  createQuizSummary,
  saveQuizSummary,
  createQuestion,
  saveQuestion,
  deleteQuestion
} from './actions';
import {
  isFullPageLoading,
  isCreatingQuizSummary,
  isSavingQuizSummary,
  isCreatingQuestion,
  isSavingQuestion,
  isDeletingQuestion
} from './selectors';
import {
  pageDataSelector,
  requiredDataSelector
} from '../selectors';
import {
  QUIZ_SUMMARY,
  QUIZ_QUESTIONS
} from '../../common/constants';

const mapStateToProps = (state: IReduxState) => ({
  isFullPageLoading: isFullPageLoading(state),
  requiredData: requiredDataSelector([QUIZ_SUMMARY, QUIZ_QUESTIONS])(state),
  creatingQuizSummary: isCreatingQuizSummary(state),
  savingQuizSummary: isSavingQuizSummary(state),
  isCreatingQuestion: isCreatingQuestion(state),
  isSavingQuestion: isSavingQuestion(state),
  isDeletingQuestion: isDeletingQuestion(state),

  quiz: pageDataSelector(state),
});

const mapDispatchToProps = {
  fetchQuiz,
  createQuizSummary,
  saveQuizSummary,
  createQuestion,
  saveQuestion,
  deleteQuestion,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizSettings);