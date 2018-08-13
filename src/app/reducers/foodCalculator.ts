/*
* Action constants
*/
export const SET_USER_FOOD_CAL_RESULT = "SET_USER_FOOD_CAL_RESULT";
export type SET_USER_FOOD_CAL_RESULT = typeof SET_USER_FOOD_CAL_RESULT;

/*
* Action interface
*/
export interface InterfaceSetUserFoodCalResult {
  type: SET_USER_FOOD_CAL_RESULT;
  payload: object;
}

export type UserFoodCalResultAction = InterfaceSetUserFoodCalResult;

/*
* Action
*/
export function setUserFoodCalResult(
  result: object
): InterfaceSetUserFoodCalResult {
  return {
    type: SET_USER_FOOD_CAL_RESULT,
    payload: result
  };
}

/*
* Store state interface
*/
export interface IStoreState {
  foodCalResult?: object;
}

/*
* Reducer
*/
export default function foodCalculatorReducer(
  state: IStoreState,
  action: UserFoodCalResultAction
): IStoreState {
  switch (action.type) {
    case SET_USER_FOOD_CAL_RESULT:
      return {
        ...state,
        foodCalResult: action.payload || {}
      };
    default:
      return state || {};
  }
  return state;
}
