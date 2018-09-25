export const screenshotsReducer = (state = [], action) => {
  switch(action.type){
    case 'SEND_SCREENSHOTS': 
      return action.payload
    default:
      return state
  }
}