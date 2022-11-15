import { useCallback, useState } from "react"
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { useDrawerNavigation } from "../../../hooks/useDrawerNavigation"
import { Screen } from "../../../screens"
import { vars } from "../../../values"
import { Button } from "../../Button"
import { InputField } from "../../InputField"
import { PageTitle } from "../../PageTitle"
import { AuthFormFooter } from "../AuthFormFooter"
import { AuthFormRegisterWrap } from "../AuthFormRegisterWrap"
import { useAuth } from "../../../hooks/useAuth";

export const AuthFormRegister = () => {
    const navigation = useDrawerNavigation();
    const { email, setEmail, onSubmitRegister, isLoading } = useAuth()
    const [birthAt, setBirthAt] = useState<Date | null>(null)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const pickerBirthAt = useCallback(() => {
        DateTimePickerAndroid.open({
            value: birthAt ? birthAt : new Date(),
            mode: 'date',
            maximumDate: new Date(),
            onChange: (_event, date) => {
                if (date) {
                    setBirthAt(date)
                }
            }
        })
    }, [birthAt])

    return (
        <AuthFormRegisterWrap>
            <PageTitle title="Criar Conta" />
            <InputField
                label="E-mail"
                style={{ marginTop: vars.space }} 
                inputProps={{
                    autoComplete: "email",
                    keyboardType:  "email-address",
                    value: email,
                    onChangeText: setEmail,
                }}    
            />
            <InputField 
                label="Nome Completo"
                style={{ marginTop: vars.space }} 
                inputProps={{value: name, onChangeText: setName}}
            />
            <InputField
                label="Data de Nascimento" 
                style={{ marginTop: vars.space }} 
                inputProps={{
                    value: birthAt instanceof Date ? format(birthAt, 'dd/MM/yyyy') : '',
                    autoComplete: 'birthdate-full',
                    onPressIn: pickerBirthAt,
                    onChangeText: () => {},
                    onKeyPress: ({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            setBirthAt(null)
                        } else {
                            setBirthAt(birthAt);
                        }
                    }

                }}    
            />
            <InputField
                label="Criar uma Senha"
                style={{ marginTop: vars.space }} 
                inputProps={{
                    secureTextEntry: true,
                    value: password,
                    onChangeText: setPassword,
                }}    
            />
            <InputField 
                label="Confirme a Senha"
                style={{ marginTop: vars.space }} 
                inputProps={{
                    secureTextEntry: true,
                    value: passwordConfirm,
                    onChangeText: setPasswordConfirm,
                }}     
            />
            <AuthFormFooter>
                <Button 
                    color="text"
                    onPress={() => navigation.navigate(Screen.AuthLogin)}    
                >
                    Já tem uma conta</Button>
                <Button 
                    color="green"
                    loading={isLoading}
                    disabled={isLoading}
                    onPress={() => 
                        onSubmitRegister({
                            name,
                            email,
                            password,
                            passwordConfirm,
                            birthAt,
                        })
                    }

                >
                    Cadastrar
                </Button>
            </AuthFormFooter>
        </AuthFormRegisterWrap>

    )
}