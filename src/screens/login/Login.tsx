import React, { useState } from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as RootNavigation from "../../navigation/RootNavigation";
import { REGISTRATION_ROUTE, WELCOME_ROUTE } from '../../navigation/routes'
import ButtonComponent from '../../components/bottom';

import styles from './styles'

function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [showEmailError, setShowEmailError] = useState<boolean>(false)
    const [showPasswordError, setShowPasswordError] = useState<boolean>(false)

    const validateEmail = (val: string) => {
        // eslint-disable-next-line
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
            setErrorMessage('Invalid Email')
            setShowErrorMessage(true)
            setShowEmailError(true)
        }
        else {
            setShowErrorMessage(false)
        }
    }

    const signIn = () => {

        setShowEmailError(email.length <= 0)
        setShowPasswordError(password.length <= 0)
        if (email.length <= 0 || password.length <= 0) {
            setErrorMessage('Please fill required fields')
            setShowErrorMessage(true)
        }
        else if (email !== '') {
            validateEmail(email)
        }
        else {
            setShowErrorMessage(false)
            setShowEmailError(false)
            setShowPasswordError(false)
        }

        if (!showErrorMessage && !showEmailError && !showPasswordError) {
            RootNavigation.navigate(WELCOME_ROUTE)
        }

    }

    const handleEmailChange = (text: string) => {
        setShowEmailError(text.length <= 0)
        setEmail(text)
    }

    const handlePasswordChange = (text: string) => {
        setShowPasswordError(text.length <= 0)
        setPassword(text)
    }

    return (
        <View style={styles.container}>
            {
                showErrorMessage && <Text>{errorMessage}</Text>
            }
            <View style={styles.inputContainer}>
                <TextInput style={showEmailError ? styles.errorinput : styles.input} placeholder="Email" value={email} onChangeText={handleEmailChange} />
                <TextInput style={showPasswordError ? styles.errorinput : styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={handlePasswordChange} />
            </View>
            <ButtonComponent callback={signIn} title="Login" />

            <View>
                <Text style={{ marginTop: 30 }}>Don&apos;t have an account?</Text>
                <TouchableOpacity onPress={() => RootNavigation.navigate(REGISTRATION_ROUTE)}>
                    <Text style={styles.link}>Register Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
