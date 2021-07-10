import { useState } from 'react'
import { useForm } from 'react-hook-form'
import  {CreateAccountService} from '../../services/RegisterService'
import styles from '../../styles/Login.module.scss'

interface RegisterProps {
    activateRegister: boolean,
    handleCloseRegister : () => void
}

interface formValidate {
    user: string,
    password: string,
    repPassword: string,
    email: string
  }

export default function RegisterForm({activateRegister, handleCloseRegister}: RegisterProps){

   const { register, handleSubmit, formState: { errors } } = useForm<formValidate>()

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')  
    const [repPassword, setRepPassword] = useState('')
    const [email, setEmail] = useState('') 

    return (
        <div className={(activateRegister === true) ? styles.enabled : styles.disabled}>
            <div >
                <p>Create your account</p>
                <form onSubmit={handleSubmit((value) => CreateAccountService({'user': user,'password':password,'email':email}))}>
                    {(errors.user) && <label className={styles.error_message}>Insira um usuario valido</label>}
                    <span>Username:<br/><input {...register("user", { min: 2, max: 50, required: true })} type="text" value={user} onChange={(event) => setUser(event.target.value)} placeholder='Usuario'/></span>

                    {(errors.password) && <label className={styles.error_message}>Insira uma senha valido</label>}
                    <span>Password:<br/><input {...register("password", { min: 8, max: 30, required: true })}type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='********'/></span>

                    {(errors.repPassword) && <label className={styles.error_message}>Insira uma senha valida</label>}
                    <span> Repeat password:<br/><input {...register("repPassword", { min: 8, max: 30, required: true })} type="password" value={repPassword} onChange={(event) => setRepPassword(event.target.value)} placeholder='********'/></span>
                    {(errors.email) && <label className={styles.error_message}>Insira um email valido</label>}
                    <span>E-mail:<br/><input type="text" {...register("email", { min: 8, max: 30, required: true })}value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email'/></span>
                    <input type="submit" value='Cadastrar'/>
                  </form>
                <span>Have account? <button onClick={handleCloseRegister}><i>Login Now</i></button></span>
          </div>
     </div>
    )
}