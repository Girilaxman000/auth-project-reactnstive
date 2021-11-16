import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Registration from '../screens/registration';
import Login from '../screens/login';
import Welcome from '../screens/welcome/Welcome';

import {
    REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    WELCOME_ROUTE
} from './routes';

type MainStackParams = {
    Registration: undefined,
    Login: undefined,
    Welcome: undefined
}

const Stack = createStackNavigator<MainStackParams>();

const AppNavigator = ({ initialRoute }: { initialRoute: string }) => {
    return (
        <>
            <Stack.Navigator initialRouteName={LOGIN_ROUTE} >
                <Stack.Screen name={LOGIN_ROUTE} component={Login} />
                <Stack.Screen name={REGISTRATION_ROUTE} component={Registration} options={{
                    headerLeft: () => {
                        return null;
                    }
                }} />
                <Stack.Screen name={WELCOME_ROUTE} component={Welcome} />
            </Stack.Navigator >
        </>

    );
};

export default AppNavigator;