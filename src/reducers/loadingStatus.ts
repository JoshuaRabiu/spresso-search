import { IAction } from '.';

export const loadingStatusReducer = (state = false, action: IAction) => {
  switch (action.type) {
    case 'LOADING_STATUS':
      return action.payload;
    default:
      return state;
  }
};
