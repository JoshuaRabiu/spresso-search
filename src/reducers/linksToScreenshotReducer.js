export const linksToScreenshotReducer = (state = [], action) => {
  switch(action.type){
    case 'SEND_LINKS':
      return action.payload
    default:
      return state
  }
}