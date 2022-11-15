import { createContext } from 'react';
import { AuthContextType } from './AuthContextType';

export const AuthContext = createContext<AuthContextType>({
    user: null,
    email: '',
    token: null,
    isLoading: false,
    isLogged: false,
    loadUser: () => {},
    onSubmitEmail: () => {},
    onSubmitForget: () => {},
    onSubmitLogin: () => {},
    onSubmitRegister: () => {},
    setEmail: () => {},
    setNextScreen: () => {},
    isLoadingForget: false,
    logout: () => {},
    setUser: () => {},
});