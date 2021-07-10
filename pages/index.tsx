import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useLogin } from '../Context/LoginContext'
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter();

  const {logged} =  useLogin()

  useEffect(() => {
  if(logged){
    router.push('logged')
  } else {
    router.push('login')
  }
},[])
  return (
    <div className={styles.container}>
    </div>
  )
}
