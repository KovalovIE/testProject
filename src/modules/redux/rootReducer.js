import { combineReducers } from 'redux';
import appState from './reducersAndActions/appState/appStateReducer';
import usersData from './reducersAndActions/usersData/userDataReducer';

const rootReducer = combineReducers({
    appState,
    usersData,
});

export default rootReducer;