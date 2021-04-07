import React from "react"
import Header from "../components/modules/Header"
import styles from '../styles/pages/Login.module.scss'

export default function Login () {
  return (
<>
<Header />
<section className={styles.container_login}>      
      
      <div className={styles.loginExterno}>
        <div className={styles.loginInterno}>
        <form method="post" action=""> 
          <h2>ACESSO AO SISTEMA</h2> 
          <div className={styles.obs_login}>
          <p>Apenas internos possuem acesso ao sistema. Para mais informações contacte um administrador.</p>
          </div>
          <div className={styles.label_login}>
          <p>
            <label className="login_name">Email</label><p></p>
            <input id="name_login" name="name_login"  type="text"></input>
          </p>
          <p> 
            <label  className="login_senha">Senha</label><p></p>
            <input id="email_login" name="email_login" type="password"/> 
          </p>
           </div>
           <div className={styles.bottomLogin}>
          <p> 
            <input type="submit" value="Entrar" /> 
          </p>
          </div>
           
        </form>
      </div>
      </div>
     </section>
</>
  )
}