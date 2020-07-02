import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IReduxState } from '../../../types';

import Main from './component';
import {
  createdQuizesSelector,
  requiredDataSelector,
  isFullPageLoading,
  isDeletingQuiz
} from './selectors';
import {
  fetchCreatedQuizes,
  deleteCreatedQuiz
} from './actions';

const mapStateToProps = (state: IReduxState) => ({
  isFullPageLoading: isFullPageLoading(state),
  requiredData: requiredDataSelector(state),
  createdQuizes: createdQuizesSelector(state),
  isDeletingQuiz: isDeletingQuiz(state)
});

const mapDispatchToProps = {
  fetchCreatedQuizes,
  deleteCreatedQuiz,
}
 
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);