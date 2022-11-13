import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { Screens } from ".."

const Stack = createStackNavigator<typeof Screens>();

export const AuthLoginScreen = (props) => {

    return (
        <Text>Email</Text>
    )
}