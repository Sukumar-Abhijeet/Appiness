/**
 * Create By @name Sukumar_Abhijeet
 */

import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    card:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        backgroundColor:'#f0f0f0',
        marginVertical:moderateScale(10),
        borderRadius:moderateScale(4),
        padding:moderateScale(15),
        paddingVertical:moderateScale(20)
    },
    name:{
        fontSize:moderateScale(25),
        fontWeight:'bold'
    },
    email:{
        color:'#092feb',
        fontSize:moderateScale(12)
    },
    gender:{    
        color:'#a19f9f',
        fontSize:moderateScale(10)
    },
    age:{
        color:'#a19f9f',
        fontSize:moderateScale(10)
    },
    phone:{
        color:'#5e5d5d'
    },
    viewWrap:{
        flexDirection:'row'
    }
});

export default styles;