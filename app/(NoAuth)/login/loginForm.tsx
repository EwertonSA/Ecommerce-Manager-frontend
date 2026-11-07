'use client'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../styles/register.login.module.scss'
import { useSearchParams } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ToastComponent } from '@/app/Components/Common/Toast'
import { authService } from '@/app/Service/authService'
export const LoginForm=()=>{
const router=useRouter()
const [toastColor, setToastColor]=useState('')
const [toastOpen, setToastOpen]=useState(false)
const [toastMessage, setToastMessage]=useState('')

const search= useSearchParams()

useEffect(()=>{
if(sessionStorage.getItem('ecommerce')){
router.push("/home")
}
},[])

useEffect(()=>{
const success= search.get('registred')
if(success==='true'){ 
setToastColor('bg-success')
setToastMessage("Cadastro realizado com sucesso!")
setToastOpen(true)
setTimeout(()=>{setToastOpen(false)},3000)
}
},[search])
const handleLogin=async(ev:FormEvent<HTMLFormElement>)=>{
ev.preventDefault()
const formData=new FormData(ev.currentTarget)
const email=formData.get('email')?.toString()||''
const password=formData.get('password')?.toString()||''
const params={email,password}
const {status}=await authService.login(params)
if(status===200){router.push('/home')}else{
setToastColor('bg-danger')
setToastMessage("Email ou senha incorretos!")
setToastOpen(true)
setTimeout(()=>{setToastOpen(false)},3000)}
}
return(
<>
<main className={styles.main}>
<Container className='py-5'>
<div className={styles.title}>
<p ><strong>Bem vindo(a) de volta!</strong></p></div>
<Form className={styles.form} onSubmit={handleLogin}>
<p className={styles.subTitle}><strong>Bem vindo(a) ao E-Commerce</strong></p>
<FormGroup>
<Label for='email' className={styles.label}/>
<Input id='email' name='email' type='email' placeholder='Qual seu e-mail?' required className={styles.input}/>
</FormGroup>
<FormGroup>
<Label for='password' className={styles.label}/>
<Input id='password' name='password' type='password' placeholder='Qual sua senha?' required className={styles.input}/>
</FormGroup>
<Button outline className={styles.btn} type='submit'>Entrar</Button>
</Form>
<ToastComponent color={toastColor} isOpen={toastOpen} message={toastMessage} />
</Container>
</main>
</>
)
}