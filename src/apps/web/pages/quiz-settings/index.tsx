import { connect } from 'react-redux';
import QuizSettings from './component';

import { IReduxState } from '../../../types';

import { fetchQuiz, saveQuizSummary, saveCreatedQuestion } from './actions';
import { quizQuestionsSelector, quizSummarySelector, requiredDataSelector } from './selectors';

const mapStateToProps = (state: IReduxState) => ({
  requiredData: requiredDataSelector(state),
  quizSummary: quizSummarySelector(state),
  quizQuestions: quizQuestionsSelector(state)
});

const mapDispatchToProps = {
  fetchQuiz,
  saveQuizSummary,
  saveCreatedQuestion
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizSettings);