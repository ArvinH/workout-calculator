import { connect } from "react-redux";
import { Dispatch } from "redux";
import TDEEForm from "../../components/TDEE/TDEEForm";
import {
  UserTDEEResultAction,
  setUserTDEEResult,
  IStoreState
} from "../../reducers/tdee";

export function mapStateToProps(state: { tdee: IStoreState }) {
  const {
    tdee: { tdeeResult }
  } = state;
  return {
    tdeeResult: tdeeResult || 0
  };
}

export function mapDispatchToProps(dispatch: Dispatch<UserTDEEResultAction>) {
  return {
    setUserTDEEResult: (result: number) => dispatch(setUserTDEEResult(result))
  };
}

// FIXED: http://hant.ask.helplib.com/c/13157220

export default connect<{}, {}, IStoreState>(
  mapStateToProps,
  mapDispatchToProps
)(TDEEForm);
