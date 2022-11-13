import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Layout } from "../../providers/Layout"
import { AuthBody } from "./AuthBody"
import { AuthFooter } from "./AuthFooter"
import { AuthFooterText } from "./AuthFooterText"
import { AuthFormEmail } from "./AuthFormEmail"
import { AuthHeader } from "./AuthHeader"
import { AuthLayoutProps } from "./AuthLayoutProps"
import { AuthLogo } from "./AuthLogo"
import logo from '../../assets/ferrari-logo.png';

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <Layout>
            <AuthHeader>
                <AuthLogo source={logo}/>
            </AuthHeader>
            <KeyboardAwareScrollView>
                <AuthBody>
                    <AuthFormEmail />
                </AuthBody>
                <AuthFooter>
                    <AuthFooterText>2022 @ Myltiane Alves. Todos os Direitos Reservados</AuthFooterText>
                </AuthFooter>
            </KeyboardAwareScrollView>
       </Layout>
    )
}