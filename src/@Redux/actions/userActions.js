/**
 * Create By @name Sukumar_Abhijeet 
 */

import { UPDATE_USER_LOGGED_IN, } from '../constants/user.constant';

export const updateUserLoggedIn =(isLoggedIn=false) =>{
    return{
        type: UPDATE_USER_LOGGED_IN,
        isLoggedIn,
    };
};