import { connect } from 'react-redux';

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
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);