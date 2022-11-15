import { Screen } from "../../screens";
import { User } from "../../types/User";
import { FormDataLoginType } from "./FormDataLoginType";
import { FormDataRegisterType } from "./FormDataRegisterType";

export type AuthContextType = {
    email: string;
    setEmail: (email: string) => void;
    onSubmitEmail: () => void;
    onSubmitRegister: (data: FormDataRegisterType) => void;
    onSubmitLogin: (data: FormDataLoginType) => void;
    onSubmitForget: () => void;
    // isLoadingForget: boolean;
    isLoading: boolean;
    isLogged: boolean;
    token: string | null;
    user:  User | null;
    loadUser: (success?: (data: {user: User}) => void) => void;
    setNextScreen: (screen: Screen) => void;
    logout: () => void;
    setUser: (user: User) => void;

}