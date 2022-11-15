import axios from 'axios';
import { format } from 'date-fns';
import { useState, useCallback } from 'react';
import { ToastAndroid } from 'react-native';
import { AuthContext } from "../../contexts/Auth"
import { FormDataRegisterType } from '../../contexts/Auth/FormDataRegisterType';
import { useDrawerNavigation } from '../../hooks/useDrawerNavigation';
import { Screen } from '../../screens';
import { User } from '../../types/User';
import { vars } from '../../values';

type FormEmailResponse = {
    exists: boolean;
}

type FormTokenResponse = {
    token: string;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [email, setEmail] = useState('')
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const [nextScreen, setNextScreen] = useState(Screen.ScheduleNew)
    const navigation = useDrawerNavigation();
    // const { catchAxiosError, showToast } = useApp();

    const redirectToNextScreen = useCallback(() => {
        if(nextScreen) {
            navigation.navigate(nextScreen);
        }
    }, [nextScreen])
    

    const showToast = (message: string, duration = ToastAndroid.SHORT) => {
        ToastAndroid.show(message, duration);
    }

    const unlogged = () => {

    }

    const catchAxiosError = (error: any) => {
        if (error.response) {
            switch (error.response.status) {
                case 'Unauthorized':
                    unlogged()
                    break;
                default:
                    showToast(error.response.data.message ??
                        error.response.data.error ?? error.response.data ??
                        'Erro desconhecido'
                    )

            }
        } else {
            switch (error.message) {
                case 'Jwr malformed':
                    unlogged()
                    break;
                default:
                    showToast(error.message ?? 'Erro desconhecido')
            }
        }
    }
    const onSubmitEmail = useCallback(() => {

        setIsLoading(true)

        axios.post(`/auth`, { email }, {
            baseURL: vars.baseURL
        })
            .then(({ data }) => {
                if (data.exists) {
                    navigation.navigate(Screen.AuthLogin)
                } else {
                    navigation.navigate(Screen.AuthRegister)
                }
            })
            .catch((error) => catchAxiosError(error))
            .finally(() => setIsLoading(false))
    }, [email])

    const onSubmitRegister = useCallback((data: FormDataRegisterType) => {
        setIsLoading(true)


        const body = { ...data } as any;

        if (data.birthAt) {
            body.birthAt = format(data.birthAt, 'yyyy-MM-dd');
        }

        axios
            .post<FormTokenResponse>(`/auth/register`, data, {
                baseURL: vars.baseURL,
            })
            .then(({ data }) => {
                setUser(data);
                setToken(data.token);
                setIsLogged(true);
            })
            .catch(catchAxiosError)
            .finally(() => setIsLoading(false));
    }, [])

    const onSubmitLogin = useCallback(() => { }, [])
    const onSubmitForget = useCallback(() => { }, [])
    const loadUser = useCallback(() => { }, [])
    const logout = () => {
        setUser(null)
        setToken(null)
        setIsLogged(false)
    }

    return (
        <AuthContext.Provider value={{
            logout,
            email,
            setEmail,
            user,
            setUser,
            token,
            isLoading,
            // isLoadingForget,
            isLogged,
            loadUser,
            onSubmitEmail,
            setNextScreen,
            onSubmitForget,
            onSubmitLogin,
            onSubmitRegister,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}