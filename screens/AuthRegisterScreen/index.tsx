import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { Screens } from ".."

const Stack = createStackNavigator<typeof Screens>();

export const AuthRegisterScreen = () => {

    return (
        <Text>Email</Text>
    )
}