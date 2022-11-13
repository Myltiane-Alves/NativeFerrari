import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { Screens } from ".."

const Stack = createStackNavigator<typeof Screens>();

export const ProfileScreen = (props) => {

    return (
        <Text>Email</Text>
    )
}