const initialState = '';

export const resultsReducer = (state=initialState, action) => {
	switch(action.type){
		case 'SEND_RESULTS':
			return !!state === true ? state.concat(action.payload) : action.payload
		case 'RESET_RESULTS':
			return initialState
		default:
			return state
	}
}