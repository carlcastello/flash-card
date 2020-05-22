import { connect } from 'react-redux';
import QuizSettings from './component';

import { IReduxState } from '../../../types';

import { fetchQuiz } from './actions';
import { requiredDataSelector } from './selectors';

const mapStateToProps = (state: IReduxState) => ({
  requiredData: requiredDataSelector(state),
});

const mapDispatchToProps = {
  fetchQuiz
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizSettings);