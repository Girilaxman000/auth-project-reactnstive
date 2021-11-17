import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

import ButtonComponent from '../../components/bottom'

import styles from './styles'

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('')

    const handleEmailChange = (text: string) => {
        setEmail(text)
    }

    const changePassword = () => {
        console.log('go to email')
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={handleEmailChange} />
            <ButtonComponent callback={changePassword} title="Send Email" />
        </View>
    )
}

export default ForgotPassword
