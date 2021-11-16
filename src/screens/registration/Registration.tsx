import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as RootNavigation from "../../navigation/RootNavigation";
import { LOGIN_ROUTE } from '../../navigation/routes'

import styles from './styles'

function Registration() {

    const [fullName, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [contactNumber, setContactNumber] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [showEmailError, setShowEmailError] = useState<boolean>(false)
    const [showPasswordError, setShowPasswordError] = useState<boolean>(false)
    const [showContactError, setShowContactError] = useState<boolean>(false)
    const [showFullNameError, setShowFullNameError] = useState<boolean>(false)

    const validateEmail = (val: string) => {
        /* eslint-disable */
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        /* eslint-enable */
        if (!regEmail.test(val)) {
            setErrorMessage('Invalid Email')
            setShowErrorMessage(true)
            setShowEmailError(true)
        }
        else {
            setShowErrorMessage(false)
        }
    }

    const signUp = () => {
        setShowEmailError(email.length <= 0)
        setShowPasswordError(password.length <= 0)
        setShowContactError(contactNumber.length <= 0)
        setShowFullNameError(fullName.length <= 0)
        if (fullName === '' || email === '' || password === '' || contactNumber === '') {
            setErrorMessage('Please fill required fields ')
            setShowErrorMessage(true)
        } else if (email !== '') {
            validateEmail(email)
        }
        else {
            setShowErrorMessage(false)
            setShowEmailError(false)
            setShowPasswordError(false)
            setShowContactError(false)
            setShowFullNameError(false)
        }

        if (!showErrorMessage && !showEmailError && !showPasswordError && !showContactError && !showFullNameError) {
            RootNavigation.navigate(LOGIN_ROUTE)
        }

    }


    const handleEmailChange = (text: string) => {
        setShowEmailError(text.length <= 0)
        setEmail(text)
        setShowErrorMessage(false)
    }

    const handlePasswordChange = (text: string) => {
        setShowPasswordError(text.length <= 0)
        setPassword(text)
    }

    const handleContactChange = (text: string) => {
        setShowContactError(text.length <= 0)
        setContactNumber(text)
    }

    const handleFullNameChange = (text: string) => {
        setShowFullNameError(text.length <= 0)
        setFullName(text)
    }

    return (
        <View style={styles.container}>
            {
                showErrorMessage && <Text>{errorMessage}</Text>
            }
            <View style={styles.inputContainer}>
                <TextInput style={showFullNameError ? styles.errorinput : styles.input} placeholder="Full Name" value={fullName} onChangeText={handleFullNameChange} />
                <TextInput style={showEmailError ? styles.errorinput : styles.input} placeholder="Email" value={email} onChangeText={handleEmailChange} />
                <TextInput style={showPasswordError ? styles.errorinput : styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={handlePasswordChange} />
                <TextInput style={showContactError ? styles.errorinput : styles.input} placeholder="Contact Number" value={contactNumber} onChangeText={handleContactChange} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Button onPress={signUp} title="Register" />
            </TouchableOpacity>

            <Text> Already have an account?</Text>
            <TouchableOpacity onPress={() => RootNavigation.navigate(LOGIN_ROUTE)}>
                <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Registration
