import { connect } from 'react-redux';

import { IReduxState } from '../../../types';

import Quiz from './component';
import { questionsSelectors } from './selectors';
import { fetchQuiz } from './actions';
import { requiredDataSelector } from '../selectors';
import { QUESTIONS } from '../../common/constants';

 // quiz: pageDataSelector(state)
  // flashcards: [
  //   {
  //     id: '123',
  //     question: 'What is the capital of Sri Lanka?',
  //     hint: 'India',
  //     questionType: QuestionType.QUESTIONAIRE,
  //     answer: 'potato'
  //   },
  //   {
  //     id: '222',
  //     question: 'Querer',
  //     subQuestion: 'v. irregular',
  //     questionType: QuestionType.WORD,
  //     answer: 'potato'
  //   },
  //   {
  //     id: '333',
  //     question: 'Querer',
  //     subQuestion: 'v. irregular',
  //     questionType: QuestionType.WORD,
  //     answer: 'potato'
  //   }
  // ]
const mapStateToProps = (state: IReduxState) => ({
  questions: questionsSelectors(state),
  requiredData: requiredDataSelector([QUESTIONS])(state),
});

const mapDispatchToProps = {
  fetchQuiz
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);