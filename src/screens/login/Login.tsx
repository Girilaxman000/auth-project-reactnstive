import React, { useState } from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import styles from './styles'
import * as RootNavigation from "../../navigation/RootNavigation";
import { REGISTRATION_ROUTE, WELCOME_ROUTE } from '../../navigation/routes'
import { TouchableOpacity } from 'react-native-gesture-handler';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showEmailError, setShowEmailError] = useState(false)
    const [showPasswordError, setShowPasswordError] = useState(false)

    const validateEmail = (val: any) => {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

        setShowEmailError(email.length <= 0 ? true : false)
        setShowPasswordError(password.length <= 0 ? true : false)
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
        setShowEmailError(text.length <= 0 ? true : false)
        setEmail(text)
    }

    const handlePasswordChange = (text: string) => {
        setShowPasswordError(text.length <= 0 ? true : false)
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
            <TouchableOpacity style={styles.button}>
                <Button onPress={signIn} title="Login" />
            </TouchableOpacity>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => RootNavigation.navigate(REGISTRATION_ROUTE)}>
                <Text style={styles.link}>Register Here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
