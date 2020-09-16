/**
 * Create By @name Sukumar_Abhijeet 
 */

import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//SCREEN IMPORTS
import HomeScreen from '../@Screens/Core/Home';

const MainAppStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const CoreStack = createAppContainer(MainAppStack);
export default CoreStack;

