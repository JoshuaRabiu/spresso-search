import { IAction } from '.';

export const screenshotsReducer = (state = [], action: IAction) => {
  switch (action.type) {
    case 'SEND_SCREENSHOTS':
      return state.concat(action.payload);
    default:
      return state;
  }
};
