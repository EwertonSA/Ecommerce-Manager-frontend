'use client'
import styles from './styles.module.scss'
import { Button, Container } from "reactstrap"
import Link from "next/link"
interface props{
logoUrl:string
btnUrl:string
btnContent:string
}
export const Header=({logoUrl,btnUrl,btnContent}:props)=>{
return(
<>
<div className={styles.header}>
<Container className={styles.container}>
<Link href={logoUrl}><img src="/logo1.jpg" alt="register" className={styles.logo}/> </Link>  
<Link href={btnUrl}><Button outline color="light" className={styles.btn}>{btnContent}</Button> </Link>   
</Container>    
</div>
</>
)
}