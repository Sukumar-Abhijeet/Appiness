/**
 * Create By @name Sukumar_Abhijeet
 */

import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:'#ebebeb'
    },
    header:{
        height:moderateScale(50),
        backgroundColor:'#fff',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:moderateScale(20),
        flexDirection:'row'
    },
    headerText:{
        fontSize:moderateScale(18),
        fontWeight:'bold'
    },
    redLogoutBtn:{
        backgroundColor:'#cd2121',
        padding:moderateScale(3),
        paddingHorizontal:moderateScale(15),
        borderRadius:moderateScale(4)
    },
    logoutText:{
        color:'#fff',
        fontSize:moderateScale(12)
    },
    listWrapper:{
        padding:moderateScale(10),
    }
});

export default styles;