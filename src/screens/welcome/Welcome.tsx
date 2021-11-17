import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as RootNavigation from "../../navigation/RootNavigation";
import { CHANGEPASSWORD_ROUTE } from '../../navigation/routes'

import styles from './styles';

function Welcome() {
    return (
        <View>
            <Text>Welcome home.</Text>
            <View>
                <TouchableOpacity onPress={() => RootNavigation.navigate(CHANGEPASSWORD_ROUTE)}>
                    <Text style={styles.password}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome
