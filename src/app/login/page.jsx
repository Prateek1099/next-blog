import React from 'react'
import styles from "./login.module.css"

const Login = () => {

  return (

    <div className={styles.container}>
    <div className={styles.wrapper}>

    <div className={styles.socialButton}>Sign in with Google</div>
    <div className={styles.socialButton}>Sign in with Facebook</div>
    <div className={styles.socialButton}>Sign in with Github</div>

    </div>
    </div>
  )
}

export default Login