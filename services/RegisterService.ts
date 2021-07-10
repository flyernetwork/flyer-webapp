import { INSTANCE } from "./Axios/AxiosApi";

interface RegisterProps {
    user: string,
    password: string,
    email: string
}

export async function CreateAccountService({user,password, email} : RegisterProps){
 await INSTANCE.post('/register', {'user':user, 'password': password,'email': email}).then((result) => result.status)
    
}