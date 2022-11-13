import { vars } from "../../../values"
import { Button } from "../../Button"
import { InputField } from "../../InputField"
import { PageTitle } from "../../PageTitle"
import { AuthFormFooter } from "../AuthFormFooter"
import { AuthFormEmailWrap } from "./AuthFormEmailWrap"

export const AuthFormEmail = () => {
    return (
        <AuthFormEmailWrap>
            <PageTitle title="Autenticação" />
            <InputField label="E-mail" style={{ marginTop: vars.space}}/>
            <AuthFormFooter>
                <Button color="text">Criar uma conta</Button>
                <Button color="green">Próximo</Button>
            </AuthFormFooter>
        </AuthFormEmailWrap>
    )
}