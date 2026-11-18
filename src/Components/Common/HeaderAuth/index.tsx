'use client'
import Link from "next/link"
import { Container, Form, Input, Modal } from "reactstrap"
import styles from './styles.module.scss'  
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const HeaderAuth=()=>{
const router=useRouter()
const [modalOpen, setModalOpen]=useState(false)
const handleOpenModal=()=>{
setModalOpen(true)
}
const handleCloseModal=()=>{
setModalOpen(false)
}
const handleLogout=()=>{
sessionStorage.clear()
router.push('/')
}
return(
<Container className={styles.nav}>
<Link href='/home'><img src='/Logo.jpg' className={styles.logo}></img></Link>
<div className="d-flex align-item-center">
<Form>
<Input id="search" name="search" type="search" placeholder="Pesquisar" className={styles.input}/>
</Form>
<FaSearch className={styles.search} />
<p className={styles.profile} onClick={handleOpenModal}>AB</p>
</div>
<Modal isOpen={modalOpen} toggle={handleCloseModal} className={styles.modal} backdropClassName={styles.overlay}>
<div className={styles.link}><Link href='/profile'><p >Meus Dados</p></Link>
<p className={styles.link} onClick={handleLogout}>Sair</p></div>
</Modal>
</Container>
)
}