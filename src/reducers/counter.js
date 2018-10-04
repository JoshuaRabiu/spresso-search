export const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return (state += 10);
		default:
			return state;
	}
};
