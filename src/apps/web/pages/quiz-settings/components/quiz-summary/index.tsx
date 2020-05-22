import { connect } from "react-redux";

import { IReduxState } from "../../../../../types";

import QuizSummary from './component';
import { saveQuizSummary } from './actions';
import { quizSummarySelector } from './selectors';


const mapStateToProps = (state: IReduxState) => ({
  quizSummarySelector
});

const mapDispatchToProps = {
  saveQuizSummary,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizSummary); 