
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import PropTypes from 'prop-types';

const HomeScreen = () =>{
    return(
        <TouchableOpacity style={{padding:moderateScale(8)}}>
            <Text>Home Screen</Text>
        </TouchableOpacity>
    );
};

HomeScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
};

export default HomeScreen;