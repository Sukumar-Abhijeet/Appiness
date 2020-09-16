/**
 * Create By @name Sukumar_Abhijeet 
 */

import {
    UPDATE_USER_LOGGED_IN
} from '../constants/user.constant';


const initialState = {
    isUserLoggedIn:false,
    user:{},
};

const  userReducer = (state = initialState,action) =>{
    const {isLoggedIn,type} = action;
    switch(type){

    case UPDATE_USER_LOGGED_IN:
        return{...state,isUserLoggedIn:isLoggedIn};    

    default:
        return state;
    }
};

export default userReducer;