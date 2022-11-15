import { useEffect } from "react"
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
import { useAuth } from "../../../hooks/useAuth"


export const AuthFormForget = () => {
  const {isLoadingForget, onSubmitForget} = useAuth()

  const navigation = useDrawerNavigation();

  useEffect(
    () => navigation.addListener('focus', () => onSubmitForget()),
    [navigation]
  )
  
    return (
        <AuthFormForgetWrap>
            <PageTitle title="Esqueci a senha" />
            {isLoadingForget    && 
                <AuthForgetMessage>
                    <ActivityIndicator size="small" color={vars.green}/>
                    <AuthForgetText>
                        Enviando e-mail...
                    </AuthForgetText>
                </AuthForgetMessage>
            }
            {!isLoadingForget    && 
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