import React, { useState } from 'react'
import styles from '../styles/Login.module.scss'
import LoginForm from '../components/login'
import RegisterForm from '../components/register';

function Login() {

  const [activateRegister, setActivateRegister] = useState(false);
  function handleOpenRegister(){
   setActivateRegister(true)
  }

  function handleCloseRegister(){
    setActivateRegister(false)
  }

  return (
  <>
    <main className={styles.container}>
      <LoginForm registerActive={activateRegister} handleOpenRegister={handleOpenRegister}/>
      <aside>
          <h4>description</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </aside>
      <RegisterForm  activateRegister={activateRegister} handleCloseRegister={handleCloseRegister}/>
    </main>
  </>
  );
}

export default Login;
