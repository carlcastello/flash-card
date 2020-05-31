import Quiz from './component';
import { connect } from 'react-redux';
import { IReduxState } from '../types';
import { QuestionType } from '../commons/types';

const mapStateToProps = (state: IReduxState) => ({
  flashcards: [
    {
      id: '123',
      question: 'What is the capital of Sri Lanka?',
      hint: 'India',
      questionType: QuestionType.QUESTIONAIRE,
      answer: 'potato'
    },
    {
      id: '222',
      question: 'Querer',
      subQuestion: 'v. irregular',
      questionType: QuestionType.WORD,
      answer: 'potato'
    },
    {
      id: '333',
      question: 'Querer',
      subQuestion: 'v. irregular',
      questionType: QuestionType.WORD,
      answer: 'potato'
    }
  ]
})

export default connect(
  mapStateToProps
)(Quiz);