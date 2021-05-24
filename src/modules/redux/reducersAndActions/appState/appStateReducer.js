const initialState = {
	isAppSplashScreenLoaded: false
};

export default function appState(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'CHANGE_APP_LOAD_STATE':
			return {
				...state,
				isAppSplashScreenLoaded: payload,
			};
		default:
			return state;
	}
}