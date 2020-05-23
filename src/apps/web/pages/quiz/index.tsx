import { connect } from 'react-redux';
import QuizSettings from './component';

import { IReduxState } from '../../../types';

import { fetchQuiz, createQuizSummary, saveQuizSummary, createQuestion, saveQuestion } from './actions';
import { requiredDataSelector, isFullPageLoading, isCreatingQuizSummary } from './selectors';
import { pageDataSelector } from '../selectors';

const mapStateToProps = (state: IReduxState) => ({
  isFullPageLoading: isFullPageLoading(state),
  requiredData: requiredDataSelector(state),
  creatingQuizSummary: isCreatingQuizSummary(state),

  quiz: pageDataSelector(state),
});

const mapDispatchToProps = {
  fetchQuiz,
  createQuizSummary,
  saveQuizSummary,
  createQuestion,
  saveQuestion,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizSettings);