import { connect } from 'react-redux';
import QuizSettings from './component';

import { IReduxState } from '../../../types';

import { fetchQuiz, saveQuizSummary, saveCreatedQuestion } from './actions';
import { titleSelector, descriptionSelector, flashCardsSelector } from './selectors';

const mapStateToProps = (state: IReduxState) => ({
  title: titleSelector(state),
  description: descriptionSelector(state),
  flashCards: flashCardsSelector(state)
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