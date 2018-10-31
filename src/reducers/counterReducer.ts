import { IAction } from '.';

const initialState = 0;
export const counterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state += 10;
    case 'RESET_RESULTS':
      return initialState;
    default:
      return state;
  }
};
