/*
* Action constants
*/
export const SET_USER_TDEE_RESULT = "SET_USER_TDEE_RESULT";
export type SET_USER_TDEE_RESULT = typeof SET_USER_TDEE_RESULT;

/*
* Action interface
*/
export interface InterfaceSetUserTDEEResult {
  type: SET_USER_TDEE_RESULT;
  payload: number;
}

export type UserTDEEResultAction = InterfaceSetUserTDEEResult;

/*
* Action
*/
export function setUserTDEEResult(result: number): InterfaceSetUserTDEEResult {
  return {
    type: SET_USER_TDEE_RESULT,
    payload: result
  };
}

/*
* Store state interface
*/
export interface IStoreState {
  tdeeResult?: number;
}

/*
* Reducer
*/
export default function tdeeReducer(
  state: IStoreState,
  action: UserTDEEResultAction
): IStoreState {
  switch (action.type) {
    case SET_USER_TDEE_RESULT:
      return {
        ...state,
        tdeeResult: action.payload || 0
      };
    default:
      return state || {};
  }
  return state;
}
