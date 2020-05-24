import { connect } from 'react-redux';
import { IReduxState } from '../../../types';

import Question from './component';

const mapStateToProps = (state: IReduxState) => ({
  
})

export default connect(
  mapStateToProps
)(Question)