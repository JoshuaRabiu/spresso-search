import { IAction } from '.';

export const queryReducer = (state = '', action: IAction) => {
  switch (action.type) {
    case 'SET_QUERY':
      return action.payload;
    default:
      return state;
  }
};
