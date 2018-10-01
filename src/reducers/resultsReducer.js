export const resultsReducer = (state='', action) => {
	switch(action.type){
		case 'SEND_RESULTS':
			return !!state === true ? state.concat(action.payload) : action.payload
		case 'RESET_RESULTS':
			return ''
		default:
			return state
	}
}