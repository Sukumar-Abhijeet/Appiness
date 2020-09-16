/**
 * Create By @name Sukumar_Abhijeet 
 */

import {
    UPDATE_EMPLOYEE_LIST
} from '../constants/employeeList.constant';


import {user} from '../../@Constants/JSON/UserData.json';

console.log('userReducer',user);

const initialState = {
    allEmployees:[user],
};

const  employeeListReducer = (state = initialState,action) =>{
    const {newEmployeeList=[],type} = action;
    switch(type){

    case UPDATE_EMPLOYEE_LIST:
        return{...state,allEmployees:newEmployeeList};    

    default:
        return state;
    }
};

export default employeeListReducer;