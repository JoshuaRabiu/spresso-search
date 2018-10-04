export const loadingStatusReducer = (state = false, action) => {
	switch (action.type) {
		case 'LOADING_STATUS':
			return action.payload;
		default:
			return state;
	}
};
