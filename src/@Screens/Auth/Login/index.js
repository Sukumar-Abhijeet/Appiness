/**
 * Create By @name Sukumar_Abhijeet 
 */

import React,{useState,useRef} from 'react';
import { SafeAreaView,View,TextInput,Text,TouchableOpacity,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import * as userLoginActions from '../../../@Redux/actions/userActions';
import {username,password} from '../../../@Constants/JSON/LoginValidate.json';
import { connect } from 'react-redux';

const LoginScreen = ({...props}) =>{

    const {
        navigation:{navigate},
        updateUserLoggedIn
    } = props;

    const [email, setEmail] = useState('');
    const [pass , setPass] = useState('');
    const myPassword = useRef();

    const checkLogin = () =>{
        if(email === '' || pass ===  '')
            Toast.show('Empty Field');
        else if(email!==username || pass!==password)
            Toast.show('Invalid Credentials');
        else
            completLoginProcess();
    };
    const completLoginProcess = () =>{
        Toast.show('Logging In');
        updateUserLoggedIn(true);
        navigate('coreStack');
    };

    const renderEmailBox = () =>{
        return(
            <TextInput
                autoCapitalize='none'
                autoFocus={true}
                blurOnSubmit={false}
                onChangeText={email => {
                    setEmail(email.trim());
                }}
                onSubmitEditing={() => { myPassword.current.focus(); }}
                placeholder="Please enter your email " 
                placeholderTextColor={'#6e6d6d'}
                returnKeyType={'next'}
                style={styles.inputField}
            />
        );
    };
    const renderPassWordBox = () =>{
        return(
            <TextInput
                onChangeText={password => setPass( password )}
                onSubmitEditing ={()=> {validateCredentaials();}}
                placeholder="Enter password"
                placeholderTextColor={'#6e6d6d'}
                ref={myPassword}
                returnKeyType={'done'}
                secureTextEntry={true}
                style={styles.inputField}
            />
        );
    };

    return(
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.loginText}>LOGIN</Text>
                <View style={styles.card}>
                    {renderEmailBox()}
                    {renderPassWordBox()}
                </View>
                <TouchableOpacity onPress={()=>checkLogin()} style={styles.loginButton}>
                    <Text style={styles.loginbtnText}>Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

LoginScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
    updateUserLoggedIn:PropTypes.func.isRequired,
};

const mapStateToProps =() =>{
    return {
    };
};

const  mapDispatchToProp =(dispatch)=>({
    updateUserLoggedIn:isLoggedIn =>
        dispatch(userLoginActions.updateUserLoggedIn(isLoggedIn)),
});


export default connect(mapStateToProps,mapDispatchToProp)(LoginScreen);