'use client'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../styles/register.login.module.scss'
import { FormEvent, useEffect, useState } from 'react'
import { authService } from '@/app/Service/authService'
import { useRouter } from 'next/navigation'
import { ToastComponent } from '@/app/Components/Common/Toast'
const Register=()=>{
const router=useRouter()
const [toastOpen, setToastOpen]=useState(false)
const [toastMessage, setToastMessage]=useState('')
useEffect(()=>{
if(sessionStorage.getItem('ecommerce')){
router.push("/home")
}
},[])
const handleRegister=async(event:FormEvent<HTMLFormElement>)=>{
event.preventDefault()

const formData= new FormData(event.currentTarget)
const name=formData.get('name')?.toString()||''
const email=formData.get('email')?.toString()||''
const password=formData.get('password')?.toString()||''
const confirmPassword=formData.get('confirmPassword')?.toString()||''
const params={name,email,password}
if(password!==confirmPassword){
setToastMessage("Senha ou confirmação incorreta")
setToastOpen(true)
setTimeout(()=>{setToastOpen(false)},3000)
return
}
const {data,status}= await authService.register(params)
try {
if(status===201){ 
router.push('/login?registred=true')
}else{
setToastOpen(true)
setTimeout(()=>{setToastOpen(false)},3000)
}
} catch (error:any) {
const errorMsg = error.response?.data?.message || 'Erro ao realizar cadastro'
    setToastMessage(errorMsg)
    setToastOpen(true)
    setTimeout(() => {
      setToastOpen(false)
    }, 3000)
}

}
return(
<main className={styles.main}>
<Container className='py-5'>
<div className={styles.title}>
<p ><strong>Bem vindo ao e-commerce mais eficiente da WEB</strong></p></div>
<Form className={styles.form} onSubmit={handleRegister}>
<p className={styles.subTitle}><strong>Faça a sua conta!</strong></p>
<FormGroup>
<Label for="name" className={styles.label}>NOME</Label>
<Input id='name' name='name' type='text'placeholder='Qual seu nome?' required maxLength={20} className={styles.inputName}/>
</FormGroup>
<FormGroup>
<Label for="name" className={styles.label}>E-MAIL</Label>
<Input id='email' name='email' type='email' placeholder='Digite seu email?' required maxLength={20} className={styles.inputName}/>
</FormGroup>
<FormGroup>
<Label for="name" className={styles.label}>SENHA</Label>
<Input id='password' name='password' type='password'placeholder='Digite sua senha?' required minLength={8} maxLength={20} className={styles.input}/>
</FormGroup>
<FormGroup>
<Label for="name" className={styles.label}>CONFIRMAR SENHA</Label>
<Input id='confirmPassword' name='confirmPassword' type='password'placeholder='Confirme sua senha?' required minLength={8} maxLength={20} className={styles.input}/>
</FormGroup>
<FormGroup>
<Label for="name" className={styles.label}>WHATSAPP</Label>
<Input id='phone' name='phone' type='text'placeholder='(xx) 9xxxx-xxxx' data-mask='[-]+55 (00) 00000-0000' required maxLength={20} className={styles.input}/>
</FormGroup>
<Button type='submit' outline className={styles.btn}>Registrar</Button>
</Form>
</Container>
<ToastComponent color='bg-danger' isOpen={toastOpen} message={toastMessage} />
</main>
)
}
export default Register