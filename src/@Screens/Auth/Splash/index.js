/**
 * Create By @name Sukumar_Abhijeet 
 */

import React,{useEffect} from 'react';
import { SafeAreaView,Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SplashScreen = ({...props}) =>{

    const {loggedIn,navigation:{navigate}} = props;

    useEffect(()=>{
        checkUserLoggedIn();
    },[]);

    const checkUserLoggedIn = () =>{
        console.log('loggedIn',loggedIn);
        if(loggedIn) navigate('coreStack');
        else navigate('Login');
    };

    return(
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>SplashScreen</Text>
        </SafeAreaView>
    );
};

SplashScreen.propTypes = {
    loggedIn:PropTypes.bool.isRequired,
    navigation:PropTypes.object.isRequired,
};

const mapStateToProps =(state) =>{
    return {
        loggedIn: state.userObj.isUserLoggedIn
    };
};

export default connect(mapStateToProps)(SplashScreen);