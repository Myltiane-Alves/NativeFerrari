import { useState } from "react"
import { useDrawerNavigation } from "../../../hooks/useDrawerNavigation"
import { Screen } from "../../../screens"
import { Button } from "../../Button"
import { PageTitle } from "../../PageTitle"
import { AuthForgetIcon } from "../AuthForgetIcon"
import { AuthForgetMessage } from "../AuthForgetMessage"
import { AuthForgetText } from "../AuthForgetText"
import { AuthFormFooter } from "../AuthFormFooter"
import { AuthFormForgetWrap } from "../AuthFormForgetWrap"
import check from '../../../assets/checks.png'
import { ActivityIndicator } from "react-native"
import { vars } from "../../../values"

export const AuthFormForget = () => {
  const [loading, setLoading] = useState(true)

  const navigation = useDrawerNavigation();

  
    return (
        <AuthFormForgetWrap>
            <PageTitle title="Esqueci a senha" />
            {loading    && 
                <AuthForgetMessage>
                    <ActivityIndicator size="small" color={vars.green}/>
                    <AuthForgetText>
                        Enviando e-mail...
                    </AuthForgetText>
                </AuthForgetMessage>
            }
            {!loading    && 
                <AuthForgetMessage>
                    <AuthForgetIcon source={check}/>
                    <AuthForgetText>
                        Verifique as instruções no se e-mail.
                    </AuthForgetText>
                </AuthForgetMessage>
            }

            <AuthFormFooter>
                <Button
                    color="text"
                    onPress={() => navigation.navigate(Screen.AuthLogin)}
                >
                    Volta para login
                </Button>
            </AuthFormFooter>
        </AuthFormForgetWrap>
    )
}