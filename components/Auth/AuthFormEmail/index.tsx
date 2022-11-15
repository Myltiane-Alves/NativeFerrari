import { useAuth } from "../../../hooks/useAuth"
import { useDrawerNavigation } from "../../../hooks/useDrawerNavigation"
import { Screen } from "../../../screens"
import { vars } from "../../../values"
import { Button } from "../../Button"
import { InputField } from "../../InputField"
import { PageTitle } from "../../PageTitle"
import { AuthFormFooter } from "../AuthFormFooter"
import { AuthFormEmailWrap } from "./AuthFormEmailWrap"

export const AuthFormEmail = () => {
    const navigation = useDrawerNavigation();
    const { email, setEmail, onSubmitEmail, isLoading } = useAuth()
    return (
        <AuthFormEmailWrap>
            <PageTitle title="Autenticação" />
            <InputField 
                label="E-mail"
                style={{ marginTop: vars.space}}
                inputProps={{
                    autoComplete: 'email',
                    keyboardType: 'email-address',
                    value: email,
                    onChangeText: setEmail,
                }}    
            />
            <AuthFormFooter>
                <Button 
                    color="text"
                    onPress={() => navigation.navigate(Screen.AuthRegister)} 
                >   
                    Criar uma conta</Button>
                <Button 
                    color="green" 
                    onPress={onSubmitEmail}
                    loading={isLoading}
                    disabled={isLoading}
                >
                    Próximo
                </Button>
            </AuthFormFooter>
        </AuthFormEmailWrap>
    )
}