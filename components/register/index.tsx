import { useState } from 'react'
import  {CreateAccountService} from '../../services/RegisterService'
import styles from '../../styles/Login.module.scss'

interface RegisterProps {
    activateRegister: boolean,
    handleCloseRegister : () => void
}

export default function RegisterForm({activateRegister, handleCloseRegister}: RegisterProps){

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')  
    const [repPassword, setRepPassword] = useState('')
    const [email, setEmail] = useState('') 

    function createAccount(){

        if(user != "" && user != null && password != '' && password != null && password === repPassword && email != ''){

        console.log(CreateAccountService({'user': user,'password': password,'email': email}))
    }
}
    return (
        <div className={(activateRegister === true) ? styles.enabled : styles.disabled}>
            <div >
                <p>Create your account</p>
                <form>
                    <span>Username:<br/><input type="text" value={user} onChange={(event) => setUser(event.target.value)} placeholder='Usuario'/></span>
                    <span>Password:<br/><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='********'/></span>
                    <span> Repeat password:<br/><input type="password" value={repPassword} onChange={(event) => setRepPassword(event.target.value)} placeholder='********'/></span>
                    <span>E-mail:<br/><input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email'/></span>
                    <input type="submit" onClick={createAccount} value='Cadastrar'/>
                  </form>
                <span>Have account? <button onClick={handleCloseRegister}><i>Login Now</i></button></span>
          </div>
     </div>
    )
}