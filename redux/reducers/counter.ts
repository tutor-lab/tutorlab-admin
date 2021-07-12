import { ActionProps, CounterState } from "./state";

export const INCREASE = "counter/INCREASE";
export const DECREASE = "counter/DECREASE";

export interface IncreaseAction {
  type: typeof INCREASE;
}

export interface DecreaseAction {
  type: typeof DECREASE;
}

const initialState: CounterState = { value: 0 };

export default function countFunc(state = initialState, action: ActionProps) {
  switch (action.type) {
    case INCREASE:
      return { ...state, value: (state.value += 1) };
    case DECREASE:
      return { ...state, value: (state.value -= 1) };
    default:
      return state;
  }
}
