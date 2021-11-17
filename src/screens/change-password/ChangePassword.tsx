import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

import ButtonComponent from '../../components/bottom'

import styles from './styles'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const handleOldPasswordChange = (text: string) => {
        setOldPassword(text)
    }

    const handleNewPasswordChange = (text: string) => {
        setNewPassword(text)
    }

    const handleConfirmPasswordChange = (text: string) => {
        setConfirmPassword(text)
    }

    const changePassword = () => {
        console.log('change')
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Old Password" value={oldPassword} onChangeText={handleOldPasswordChange} />
            <TextInput style={styles.input} placeholder="New Password" secureTextEntry value={newPassword} onChangeText={handleNewPasswordChange} />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={handleConfirmPasswordChange} />
            <ButtonComponent callback={changePassword} title="Change Password" />
        </View>
    )
}

export default ChangePassword
