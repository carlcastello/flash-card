import { connect } from 'react-redux';

import { IReduxState } from '../../../types';

import Dashboard from './component';
import { createdQuizesSelector } from './selectors';
import { fetchCreatedQuizes } from './actions';

const mapStateToProps = (state: IReduxState) => ({
  createdQuizes: createdQuizesSelector(state)
});

const mapDispatchToProps = {
  fetchCreatedQuizes 
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);