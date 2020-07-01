import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IReduxState } from '../../../types';

import Dashboard from './component';
import { createdQuizesSelector, requiredDataSelector, isFullPageLoading } from './selectors';
import { fetchCreatedQuizes } from './actions';

const mapStateToProps = (state: IReduxState) => ({
  isFullPageLoading: isFullPageLoading(state),
  requiredData: requiredDataSelector(state),
  createdQuizes: createdQuizesSelector(state)
});

const mapDispatchToProps = {
  fetchCreatedQuizes 
}
 
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);