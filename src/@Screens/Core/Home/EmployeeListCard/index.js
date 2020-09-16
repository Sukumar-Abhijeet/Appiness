/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { View,Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const EmployeeCard = ({employeeData}) =>{
    const {age,email,gender,name,phoneNo} = employeeData;

    const Capitalise = (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return(
        <View style={styles.card}>
            <Text style={styles.name}>{Capitalise(name)}</Text>
            <Text style={styles.email}>{email}</Text>
            <View style={styles.viewWrap}>
                <Text style={styles.gender}>{Capitalise(gender)}</Text>
                <Text style={styles.age}>     Age - {age} yrs</Text>
            </View>
            <Text style={styles.phone}>Phone - {phoneNo}</Text>
        </View>
    );
};

EmployeeCard.propTypes = {
    employeeData:PropTypes.object.isRequired,
};

export default EmployeeCard;