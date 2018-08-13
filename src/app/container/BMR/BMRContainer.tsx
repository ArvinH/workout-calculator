import { connect } from "react-redux";
import { Dispatch } from "redux";
import BMRForm from "../../components/BMR/BMRForm";
import {
  UserBMRResultAction,
  setUserBMRResult,
  IStoreState
} from "../../reducers/bmr";

export function mapStateToProps(state: { bmr: IStoreState }) {
  const {
    bmr: { bmrResult }
  } = state;
  return {
    bmrResult: bmrResult || 0
  };
}

export function mapDispatchToProps(dispatch: Dispatch<UserBMRResultAction>) {
  return {
    setUserBMRResult: (result: number) => dispatch(setUserBMRResult(result))
  };
}

// FIXED: http://hant.ask.helplib.com/c/13157220

export default connect<{}, {}, IStoreState>(
  mapStateToProps,
  mapDispatchToProps
)(BMRForm);
