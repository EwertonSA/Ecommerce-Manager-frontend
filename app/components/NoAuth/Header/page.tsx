'use client'
import { Container,Button } from "reactstrap"
import styles from "./styles.module.scss"
import Link from "next/link"

export const HeaderNoAuth=()=>{
return(
<>
 <div className={styles.cta}>
<img src="/logo1.jpg" alt="Logo" className={styles.logo}/>
<p>Se cadastre para realizar seus pedidos</p>
<img src="/logo1.jpg" alt="Logo" className={styles.logo} />
</div>

<Container className={styles.nav}>
<img src="/Logo.jpg" alt=""  className={styles.imgLogo}/>
<div>
<Link href="/login"><Button outline className={styles.navBtn}>Entrar</Button></Link>
<Link href="/register"><Button outline className={styles.navBtn}>Cadastrar-se</Button></Link>
</div>
</Container>
</>)
} 