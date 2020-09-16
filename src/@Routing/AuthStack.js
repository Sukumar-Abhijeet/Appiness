/**
 * Create By @name Sukumar_Abhijeet 
 */

import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//SCREEN IMPORTS
import SplashScreen from '../@Screens/Auth/Splash';
import LoginScreen from '../@Screens/Auth/Login';

const MainAppStack = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        Login:{
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
    },
    {
        initialRouteName: 'Splash',
    }
);

const AuthStack = createAppContainer(MainAppStack);
export default AuthStack;

