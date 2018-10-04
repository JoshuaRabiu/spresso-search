export const outlineReducer = (state = '', action) => {
	switch (action.type) {
		case 'OUTLINE':
			return action.payload;
		case 'OUTLINE_LOADING':
			return 'outline loading...';
		default:
			return state;
	}
};
