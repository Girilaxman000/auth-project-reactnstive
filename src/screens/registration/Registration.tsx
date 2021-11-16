import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import * as RootNavigation from "../../navigation/RootNavigation";
import { LOGIN_ROUTE } from '../../navigation/routes'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'

function Registration() {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showEmailError, setShowEmailError] = useState(false)
    const [showPasswordError, setShowPasswordError] = useState(false)
    const [showContactError, setShowContactError] = useState(false)
    const [showFullNameError, setShowFullNameError] = useState(false)

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

    const signUp = () => {
        setShowEmailError(email.length <= 0 ? true : false)
        setShowPasswordError(password.length <= 0 ? true : false)
        setShowContactError(contactNumber.length <= 0 ? true : false)
        setShowFullNameError(fullName.length <= 0 ? true : false)
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
        setShowEmailError(text.length <= 0 ? true : false)
        setEmail(text)
        setShowErrorMessage(false)
    }

    const handlePasswordChange = (text: string) => {
        setShowPasswordError(text.length <= 0 ? true : false)
        setPassword(text)
    }

    const handleContactChange = (text: string) => {
        setShowContactError(text.length <= 0 ? true : false)
        setContactNumber(text)
    }

    const handleFullNameChange = (text: string) => {
        setShowFullNameError(text.length <= 0 ? true : false)
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
