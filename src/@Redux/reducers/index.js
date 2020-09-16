/**
 * Create By @name Sukumar_Abhijeet 
 */

import { USER_LOGOUT } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import userReducer from './userReducer';
import { persistCombineReducers } from 'redux-persist';

const config = {
    key: 'APPINESS',
    storage:AsyncStorage,
    // blacklist: [
    //     'netInfo',
    // ],
};

const appReducer = persistCombineReducers(config, {
    userObj: userReducer
});

const  rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
