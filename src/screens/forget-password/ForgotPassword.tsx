import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'

import ButtonComponent from '../../components/bottom'
import * as RootNavigation from "../../navigation/RootNavigation";
import { UPDATEPASSWORD_ROUTE } from '../../navigation/routes'

import styles from './styles'

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('')
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [otp, setoTP] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const validateEmail = (val: string) => {
        // eslint-disable-next-line
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
            setErrorMessage('Invalid Email')
            setShowErrorMessage(true)
        }
        else {
            setShowErrorMessage(false)
            setSuccess(true)
        }
    }

    const handleEmailChange = (text: string) => {
        setEmail(text)
    }

    const handleOtpChange = (text: any) => {
        setoTP(text)
        if (text.length >= 6) {
            RootNavigation.navigate(UPDATEPASSWORD_ROUTE)
        }
    }

    const changePassword = () => {
        if (email !== '') {
            validateEmail(email)
        }
    }

    return (
        <View style={styles.container}>
            {
                showErrorMessage && <Text>{errorMessage}</Text>
            }
            {
                success ?
                    <>
                        <Text>Instructions sent!</Text>
                        <Text>Instructions for resetting your password have been sent to</Text>
                        <Text>{email}</Text>
                        <Text>You’ll receive this email within 5 minutes. Be sure to check your spam folder, too.</Text>
                        <View>
                            <TextInput style={styles.input} placeholder="Enter OTP" value={otp} onChangeText={handleOtpChange} />
                        </View>
                    </>
                    :
                    <>
                        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={handleEmailChange} />
                        <ButtonComponent callback={changePassword} title="Send Email" />
                    </>
            }

        </View>
    )
}

export default ForgotPassword
