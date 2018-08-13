import { connect } from "react-redux";
import { Dispatch } from "redux";
import MainEntry from "../components/MainEntry";
import {
  decrementEnthusiasm,
  EnthusiasmAction,
  incrementEnthusiasm,
  IStoreState
} from "../reducers/hello";

export function mapStateToProps(state: { hello: IStoreState }) {
  const {
    hello: { enthusiasmLevel, languageName }
  } = state;
  return {
    enthusiasmLevel,
    name: languageName
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(decrementEnthusiasm()),
    onIncrement: () => dispatch(incrementEnthusiasm())
  };
}

// FIXED: http://hant.ask.helplib.com/c/13157220

export default connect<{}, {}, IStoreState>(
  mapStateToProps,
  mapDispatchToProps
)(MainEntry);
