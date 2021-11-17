import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { CheckBox } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as RootNavigation from "../../navigation/RootNavigation";
import { LOGIN_ROUTE, TERMS_ROUTE } from '../../navigation/routes'
import ButtonComponent from '../../components/bottom';

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
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState<boolean>(true)

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

    const signUp = () => {
        setShowEmailError(email.length <= 0)
        setShowPasswordError(password.length <= 0)
        setShowContactError(contactNumber.length <= 0)
        setShowFullNameError(fullName.length <= 0)
        if (fullName === '' || email === '' || password === '' || contactNumber === '' || !checked) {
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

    const handleChange = () => {
        setChecked(!checked)
        if (!checked) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
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
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        checked={checked}
                        onPress={handleChange}
                    />
                    <TouchableOpacity onPress={() => RootNavigation.navigate(TERMS_ROUTE)}>
                        <Text style={styles.label}>I Accept  <Text style={{ color: "blue" }}>Terms And Conditions</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ButtonComponent callback={signUp} disabled={disabled} title="Register" />
            <Text> Already have an account?</Text>
            <TouchableOpacity onPress={() => RootNavigation.navigate(LOGIN_ROUTE)}>
                <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Registration
