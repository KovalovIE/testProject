export const setUsersData = (payload) => {
    return { 
        type: 'SET_USERS_DATA',
        payload
    };
};

export const setIsDataLoaded = (payload) => {
    return { 
        type: 'SET_IS_DATA_LOADED',
        payload
    };
};