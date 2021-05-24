const initialState = {
	usersData: [],
	isUsersDataLoaded: false
};

export default function usersData(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'SET_USERS_DATA':
			return {
				...state,
				usersData: [...payload],
			};
		case 'SET_IS_DATA_LOADED':
			return {
				...state,
				isUsersDataLoaded: payload,
			};
		default:
			return state;
	}
}