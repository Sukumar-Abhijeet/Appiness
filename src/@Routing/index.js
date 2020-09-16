/**
 * Create By @name Sukumar_Abhijeet
 */

import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import AuthStack from './AuthStack';
import CoreStack from './CoreStack';

const SwitchNav = createSwitchNavigator({
    coreStack: { screen: CoreStack },
    authStack: {screen:  AuthStack },
},
{
    initialRouteName:'authStack',
    defaultNavigationOptions:{
        headerShown:false
    }
},
);

const SwitchNavigator = createAppContainer(SwitchNav);
export default  SwitchNavigator;