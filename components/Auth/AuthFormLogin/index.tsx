import {useState } from "react"
import { useAuth } from "../../../hooks/useAuth"
import { useDrawerNavigation } from "../../../hooks/useDrawerNavigation"
import { Screen } from "../../../screens"
import { vars } from "../../../values"
import { Button } from "../../Button"
import { InputField } from "../../InputField"
import { PageTitle } from "../../PageTitle"
import { AuthFormFooter } from "../AuthFormFooter"
import { AuthFormLoginWrap } from "../AuthFormLoginWrap"

export const AuthFormLogin = () => {
    const navigation = useDrawerNavigation();
    const { onSubmitLogin, email, setEmail, isLoading } = useAuth();
    const [password, setPassword] = useState('');

    return (
        <AuthFormLoginWrap>
            <PageTitle title="Fazer login" />
            <InputField
                label="E-mail"
                style={{ marginTop: vars.space }}
                inputProps={{
                    autoComplete: 'email',
                    keyboardType: 'email-address',
                    value: email,
                    onChangeText: setEmail,
                }}
            />
            <InputField
                label="Senha"
                style={{ marginTop: vars.space }}
                inputProps={{
                    secureTextEntry: true,
                    value: password,
                    onChangeText: setPassword,
                }}
            />
            <AuthFormFooter>
                <Button
                    color="text"
                    onPress={() => navigation.navigate(Screen.AuthForget)}
                >
                    Esqueceu sua senha?
                </Button>
                <Button
                    color="green"
                    loading={isLoading}
                    disabled={isLoading}
                    onPress={() =>
                        onSubmitLogin({
                            email,
                            password,
                        })
                    }
                >
                    Login
                </Button>
            </AuthFormFooter>
            <AuthFormFooter
                style={{ justifyContent: 'center', marginTop: vars.space }}
            >
                <Button
                    color="text"
                    onPress={() => navigation.navigate(Screen.AuthEmail)}
                >
                    Este não é o seu e-mail?
                </Button>
            </AuthFormFooter>
        </AuthFormLoginWrap>
    )
}