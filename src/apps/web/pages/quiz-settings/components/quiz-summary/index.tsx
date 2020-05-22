import { connect } from "react-redux";

import { IReduxState } from "../../../../../types";

import QuizSummary from './component';
import { saveQuizSummary, createQuizSummary } from './actions';
import { quizSummarySelector } from './selectors';


const mapStateToProps = (state: IReduxState) => ({
  quizSummary: quizSummarySelector(state)
});

const mapDispatchToProps = {
  saveQuizSummary,
  createQuizSummary,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizSummary); 