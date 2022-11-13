import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { Screens, Screen } from ".."
import { AuthEmailScreen } from '../AuthEmailScreen';
import { AuthForgetScreen } from '../AuthForgetScreen';
import { AuthLoginScreen } from '../AuthLoginScreen';
import { AuthRegisterScreen } from '../AuthRegisterScreen';

const Stack = createStackNavigator<typeof Screens>();

export const AuthScreen = (props) => {

    return (
        <Stack.Navigator
            initialRouteName={Screen.AuthEmail}
            screenOptions={{
                headerShown: false,
                animationEnabled: true
            }}
        >

        <Stack.Screen name={Screen.AuthEmail} component={AuthEmailScreen} />
        <Stack.Screen name={Screen.AuthRegister} component={AuthRegisterScreen} />
        <Stack.Screen name={Screen.AuthLogin} component={AuthLoginScreen} />
        <Stack.Screen name={Screen.AuthForget} component={AuthForgetScreen} />
    </Stack.Navigator>
    )
}