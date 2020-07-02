import { connect } from 'react-redux';

import { IReduxState } from '../../../types';

import Quiz from './component';
import { questionsSelectors } from './selectors';
import { fetchQuiz } from './actions';
import { requiredDataSelector } from '../selectors';
import { QUESTIONS } from '../../common/constants';


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