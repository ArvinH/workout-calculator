/*
* Action constants
*/
export const SET_USER_BMR_RESULT = "SET_USER_BMR_RESULT";
export type SET_USER_BMR_RESULT = typeof SET_USER_BMR_RESULT;

/*
* Action interface
*/
export interface InterfaceSetUserBRMResult {
  type: SET_USER_BMR_RESULT;
  payload: number;
}

export type UserBMRResultAction = InterfaceSetUserBRMResult;

/*
* Action
*/
export function setUserBMRResult(result: number): InterfaceSetUserBRMResult {
  return {
    type: SET_USER_BMR_RESULT,
    payload: result
  };
}

/*
* Store state interface
*/
export interface IStoreState {
  bmrResult?: number;
}

/*
* Reducer
*/
export default function bmrReducer(
  state: IStoreState,
  action: UserBMRResultAction
): IStoreState {
  switch (action.type) {
    case SET_USER_BMR_RESULT:
      return {
        ...state,
        bmrResult: action.payload || 0
      };
    default:
      return state || {};
  }
  return state;
}
