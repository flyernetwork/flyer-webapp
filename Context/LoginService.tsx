import { apiResolver } from "next/dist/next-server/server/api-utils";
import { useState, createContext, Children, useEffect } from "react";
import { INSTANCE } from "../services/Axios/AxiosApi";

interface LoginProps {
    user: string,
    password: string
}

interface contextProps {
    logged: boolean,
    login: ({user,password} : LoginProps) => Promise<void>
}

const LoginContext = createContext<contextProps>({} as contextProps)

export default LoginContext;

export function LoginProvider({children}){
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(sessionStorage.getItem('token')){
            INSTANCE.defaults.headers.Authorization = 'Bearer ${response.data.token}'
            setLogged(true)
            
        }
        setLoading(false)
    }, [])

    if(loading === true){
        return <div className='loading_page'></div>
    }
    
    
    async function login({user,password} : LoginProps) {
        const response = await INSTANCE.post('login', { 'user': user , 'password':password});

        INSTANCE.defaults.headers.Authorization = 'Bearer ${response.data.token}'
        sessionStorage.setItem('token', JSON.stringify(response.data.token));
    }

    return (
        <LoginContext.Provider value={{'logged': logged, 'login': login}}>
            {children}
        </LoginContext.Provider>
    )
}