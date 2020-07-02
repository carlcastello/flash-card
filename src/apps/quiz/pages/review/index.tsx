import { connect } from "react-redux";
import { IReduxState } from "../../../types";
import ReviewPage from "./components";


const mapStateToProps = (state: IReduxState) => ({

});

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewPage);