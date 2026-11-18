import { Container } from "reactstrap"
import styles from './styles.module.scss'
export const Footer=()=>{
return(
<>
<Container className={styles.footer}>
<img src="/Logo.jpg" alt="logoFooter" className={styles.logo}/>
<a href="https://google.com" target="blank" className={styles.link}>GOOGLE.COM</a>
</Container>
</>
)
}