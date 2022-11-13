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

export const AuthFormRegister = () => {
    const navigation = useDrawerNavigation();
    const [birthAt, setBirthAt] = useState<Date | null>(null)

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
                }}    
            />
            <InputField label="Nome Completo" style={{ marginTop: vars.space }} />
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
                }}    
            />
            <InputField 
                label="Confirme a Senha"
                style={{ marginTop: vars.space }} 
                inputProps={{
                    secureTextEntry: true,
                }}     
            />
            <AuthFormFooter>
                <Button 
                    color="text"
                    onPress={() => navigation.navigate(Screen.AuthLogin)}    
                >
                    Já tem uma conta</Button>
                <Button color="green">Cadastrar</Button>
            </AuthFormFooter>
        </AuthFormRegisterWrap>

    )
}