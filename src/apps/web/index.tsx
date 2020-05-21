import { connect } from 'react-redux';

import { IReduxState } from '../types';
import { isFullPageLoading } from './common/selectors';

import Router from './router';

const mapStateToProps = (state: IReduxState) => ({
  isFullPageLoading: isFullPageLoading(state)
})


export default connect(
  mapStateToProps
)(Router);
