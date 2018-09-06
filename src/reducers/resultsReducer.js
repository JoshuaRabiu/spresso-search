export const resultsReducer = (state='', action) => {
	switch(action.type){
		case 'SEND_RESULTS':
			return action.payload
		default:
			return state
	}
}