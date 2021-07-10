import styles from '../../styles/Login.module.scss'
import logoImg from '../../public/images/logo.jpg'
import Image from 'next/image'
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import LoginContext from '../../Context/LoginService';

interface LoginProps {
  registerActive: boolean,
  handleOpenRegister: () => void,
}

interface formValidate {
  user: string,
  password: string
}

export default function LoginForm({ registerActive, handleOpenRegister }: LoginProps) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<formValidate>()

  const { login, logged } = useContext(LoginContext);

  if(logged == true){
    return <h1>Logado com sucesso</h1>
  }

  return (
    <section className={(registerActive === false) ? styles.header_container_login : styles.registerActivated}>
      <div>
        <Image src={logoImg} className={styles.logo} />
        <h1>Title</h1>
      </div>
      <p> Please login in your account</p>
      <form onSubmit={handleSubmit((value) => login({'user': user, 'password': password}))}>
        {(errors.user) && <label  className={styles.error_message}>Insira um usuario valido</label>}
        <span>Username:  <br /><input {...register("user", { min: 2, max: 50, required: true })}
          value={user} onChange={(event) => { setUser(event.target.value); }} placeholder='Usuario' /></span>
        {(errors.password) && <label  className={styles.error_message}>Insira uma senha valida</label>}
        <span>Password: <br /><input {...register("password", { min: 2, max: 50, required: true })}
          value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder='********' /></span>
        <input type="submit" value='Entrar' />
      </form>
      <a href='#'>forgot password?</a>
      <span>Dont have account? <button onClick={handleOpenRegister}><i>Create New</i></button></span>
    </section>
  )
}