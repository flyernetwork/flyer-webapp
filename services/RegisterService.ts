import { INSTANCE } from "./Axios/AxiosApi";

interface RegisterProps {
    user: string,
    password: string,
    email: string
}

export async function CreateAccountService({user,password, email} : RegisterProps){
    return await INSTANCE.post('/register', {user,password,email}).then((result) => result.status)
}