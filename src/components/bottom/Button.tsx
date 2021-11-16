import React from 'react'
import { View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './styles'

type ButtonComponentType = {
    title: string
    callback: () => void
    disabled?: boolean
}

function ButtonComponent(props: ButtonComponentType) {
    const handleCallBack = () => {
        props.callback()
    }

    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Button onPress={handleCallBack} disabled={props.disabled} title={props.title} />
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent
