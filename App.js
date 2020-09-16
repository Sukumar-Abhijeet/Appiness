/**
 * Create By @name Sukumar_Abhijeet
 */

import React, { Component } from 'react';
import { SafeAreaView,Text } from 'react-native';
import { Provider } from 'react-redux';
import reduxStore from './src/@Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import SwitchNavigator from './src/@Routing';
import ScreenLoader from './src/@GlobalComponents/ScreenLoader';

export const reduxPersistStore = persistStore(reduxStore); 

class App extends Component {

 

    renderLoader = () =>{
        return <ScreenLoader />;
    }

    render() {
        return (
            <Provider store={reduxStore}>
                <PersistGate loading={this.renderLoader()} persistor={reduxPersistStore}>
                    <SwitchNavigator />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
