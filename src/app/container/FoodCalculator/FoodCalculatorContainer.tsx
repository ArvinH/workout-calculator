import { connect } from "react-redux";
import { Dispatch } from "redux";
import FoodCalculatorForm from "../../components/Food_Calculator/FoodCalculatorForm";
import {
  UserFoodCalResultAction,
  setUserFoodCalResult,
  IStoreState
} from "../../reducers/foodCalculator";

export function mapStateToProps(state: { foodCalculator: IStoreState }) {
  const {
    foodCalculator: { foodCalResult }
  } = state;
  return {
    foodCalResult: foodCalResult || {}
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<UserFoodCalResultAction>
) {
  return {
    setUserFoodCalResult: (result: object) =>
      dispatch(setUserFoodCalResult(result))
  };
}

// FIXED: http://hant.ask.helplib.com/c/13157220

export default connect<{}, {}, IStoreState>(
  mapStateToProps,
  mapDispatchToProps
)(FoodCalculatorForm);
