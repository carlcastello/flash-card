import { connect } from 'react-redux';

import { IReduxState } from '../../../../../../types';

import QuizQuestion from './component';
import { quizQuestionsSelector } from './selector';
import { saveNewQuestion } from './actions';

const mapStateToProps = (state: IReduxState) => ({
  quizQuestions: quizQuestionsSelector(state)
})

const mapDispatchToProps = {
  saveNewQuestion
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizQuestion);