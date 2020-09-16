
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { TouchableOpacity,View,Text,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { connect } from 'react-redux';
import EmployeeCard from './EmployeeListCard';
import { moderateScale } from 'react-native-size-matters';
import * as userLoginActions from '../../../@Redux/actions/userActions';

const HomeScreen = ({...props}) =>{

    const {allEmployees,updateUserLoggedIn,navigation:{navigate}} = props;

    const processLogout = () =>{
        updateUserLoggedIn(false);
        navigate('authStack');
    };

    const renderHeader = () =>{
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>Dashboard</Text>
                <TouchableOpacity onPress={()=>processLogout()} style={styles.redLogoutBtn}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderEmployeeList = () =>{
        if(allEmployees.length)
            return(
                <ScrollView showsVerticalScrollIndicator={false} style={styles.listWrapper}>
                    <View style={{paddingHorizontal:moderateScale(5)}}>
                        {
                            allEmployees.map((item,index)=>(
                                <EmployeeCard employeeData={item} key={index} />
                            ))
                        }
                    </View>
                </ScrollView>
            );
        
        return null;
    };

    return(
        <TouchableOpacity style={styles.mainContainer}>
            {renderHeader()}
            {
                renderEmployeeList()
            }
        </TouchableOpacity>
    );
};

HomeScreen.propTypes = {
    allEmployees:PropTypes.array.isRequired,
    navigation:PropTypes.object.isRequired,
    updateUserLoggedIn:PropTypes.func.isRequired,
};

const mapStateToProps =(state) =>{
    return {
        allEmployees: state.employeeList.allEmployees
    };
};

const  mapDispatchToProp =(dispatch)=>({
    updateUserLoggedIn:isLoggedIn =>
        dispatch(userLoginActions.updateUserLoggedIn(isLoggedIn)),
});


export default connect(mapStateToProps,mapDispatchToProp)(HomeScreen);