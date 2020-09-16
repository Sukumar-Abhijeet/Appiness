
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { TouchableOpacity,View,Text,SafeAreaView,FlatList } from 'react-native';
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
                <FlatList
                    data={allEmployees}
                    keyExtractor={item => item.id.toString()}
                    maxToRenderPerBatch={4}
                    renderItem={({ item }) => (
                        <View style={{paddingHorizontal:moderateScale(5)}}>
                            <EmployeeCard employeeData={item} />
                        </View>
                    )}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    style={styles.listWrapper}
                    windowSize={6}
                />
            );
        return null;
    };

    return(
        <SafeAreaView style={styles.mainContainer}>
            {renderHeader()}
            {renderEmployeeList()}
        </SafeAreaView>
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