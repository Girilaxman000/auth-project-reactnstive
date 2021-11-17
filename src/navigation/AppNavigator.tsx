import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Registration from '../screens/registration';
import Login from '../screens/login';
import Welcome from '../screens/welcome/Welcome';
import TermsConditions from '../screens/terms-conditions';
import ChangePassword from '../screens/change-password';
import ForgotPassword from '../screens/forget-password';

import {
    REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    WELCOME_ROUTE,
    TERMS_ROUTE,
    CHANGEPASSWORD_ROUTE,
    FORGOTPASSWORD_ROUTE
} from './routes';

type MainStackParams = {
    Registration: undefined,
    Login: undefined,
    Welcome: undefined,
    ForgotPassword: undefined,
    ChangePassword: undefined,
    TermsConditions: undefined
}

const Stack = createStackNavigator<MainStackParams>();

const AppNavigator = () => {
    return (
        <>
            <Stack.Navigator initialRouteName={LOGIN_ROUTE} >
                <Stack.Screen name={LOGIN_ROUTE} component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name={REGISTRATION_ROUTE} component={Registration} options={{
                    headerLeft: () => {
                        return null;
                    },
                    headerShown: false
                }} />
                <Stack.Screen name={WELCOME_ROUTE} component={Welcome} />
                <Stack.Screen name={TERMS_ROUTE} component={TermsConditions} />
                <Stack.Screen name={CHANGEPASSWORD_ROUTE} component={ChangePassword} />
                <Stack.Screen name={FORGOTPASSWORD_ROUTE} component={ForgotPassword} />
            </Stack.Navigator >
        </>
    );
};

export default AppNavigator;