/**
 * Create By @name Sukumar_Abhijeet 
 */

import React,{useEffect} from 'react';
import { TouchableOpacity,Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SplashScreen = ({...props}) =>{

    const {loggedIn,navigation:{navigate}} = props;

    useEffect(()=>{
        checkUserLoggedIn();
    },[])

    const checkUserLoggedIn = () =>{
        if(loggedIn) navigate('coreStack');
        else navigate('Login');
    }

    return(
        <TouchableOpacity style={{padding:moderateScale(8)}}>
            <Text>SplashScreen</Text>
        </TouchableOpacity>
    );
};

SplashScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
    loggedIn:PropTypes.string.isRequired
};

const mapStateToProps =(state) =>{
    return {
        loggedIn: state.userObj.isUserLoggedIn
    };
};

export default connect(mapStateToProps)(SplashScreen);