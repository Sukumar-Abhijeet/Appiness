/**
 * Create By @name Sukumar_Abhijeet
 */

import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    scrollContainer:{
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    loginText:{
        fontSize:moderateScale(18),
        fontWeight:'bold'
    },
    card:{
        width:'90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        backgroundColor:'#f0f0f0',
        marginVertical:moderateScale(20),
        borderRadius:moderateScale(4),
        padding:moderateScale(15),
        paddingVertical:moderateScale(20)
    },
    inputField:{
        borderBottomColor:'#cfcfcf',
        borderBottomWidth:1
    },
    loginButton:{
        alignSelf:'flex-end',
        marginRight:moderateScale(20),
        backgroundColor:'#0751f0',
        paddingHorizontal:moderateScale(25),
        padding:moderateScale(6),
        borderRadius:moderateScale(4)
    },
    loginbtnText:{
        color:'#fff'
    }
});

export default styles;