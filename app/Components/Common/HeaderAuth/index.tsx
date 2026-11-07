'use client'
import Link from "next/link"
import { Container, Form, Input } from "reactstrap"
import styles from './styles.module.scss'  
import { FaSearch } from "react-icons/fa"

export const HeaderAuth=()=>{
return(
<Container className={styles.nav}>
<Link href='/home'><img src='/Logo.jpg' className={styles.logo}></img></Link>
<div className="d-flex align-item-center">
<Form>
<Input id="search" name="search" type="search" placeholder="Pesquisar" className={styles.input}/>
</Form>
<FaSearch className={styles.search} />
<p className={styles.profile}>AB</p>
</div>

</Container>
)
}