/*
* Action constants
*/
export const INCREMENT_ENTHUSIASM = "INCREMENT_ENTHUSIASM";
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = "DECREMENT_ENTHUSIASM";
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

/*
* Action interface
*/
export interface InterfaceIncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

export interface InterfaceDecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction =
  | InterfaceIncrementEnthusiasm
  | InterfaceDecrementEnthusiasm;

/*
* Action
*/
export function incrementEnthusiasm(): InterfaceIncrementEnthusiasm {
  return {
    type: INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): InterfaceDecrementEnthusiasm {
  return {
    type: DECREMENT_ENTHUSIASM
  };
}

/*
* Store state interface
*/
export interface IStoreState {
  compiler?: string;
  framework?: string;
  bundler?: string;
  name?: string;
  languageName?: string;
  enthusiasmLevel?: number;
}

/*
* Reducer
*/
export default function enthusiasm(
  state: IStoreState,
  action: EnthusiasmAction
): IStoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: (state.enthusiasmLevel || 0) + 1
      };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, (state.enthusiasmLevel || 0) - 1)
      };
    default:
      return {};
  }
  return state;
}
