'use client'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../styles/register.login.module.scss'
const Register=()=>{
return(
<main className={styles.main}>
<Container className='py-5'>
<p className='text-center'><strong>Bem vindo ao comercio eletrônico mais eficiente da WEB</strong></p>
<Form className={styles.form}>
<p className='text-center'><strong>Faça a sua conta!</strong></p>
<FormGroup>
<Label for="name" className={styles.label}>NOME</Label>
<Input id='name' name='name' type='text'placeholder='Qual seu nome?' required maxLength={20} className={styles.input}/>
</FormGroup>
<FormGroup>
<Label for="name" className={styles.label}>E-MAIL</Label>
<Input id='email' name='email' type='email' placeholder='Digite seu email?' required maxLength={20} className={styles.input}/>
</FormGroup>
<FormGroup>
<Label for="name" className={styles.label}>SENHA</Label>
<Input id='password' name='password' type='password'placeholder='Digite sua senha?' required minLength={8} maxLength={20} className={styles.input}/>
</FormGroup>
<FormGroup>
<Label for="name" className={styles.label}>CONFIRMAR SENHA</Label>
<Input id='password' name='password' type='password'placeholder='Confirme sua senha?' required minLength={8} maxLength={20} className={styles.input}/>
</FormGroup>
<FormGroup>
<Label for="name" className={styles.label}>WHATSAPP</Label>
<Input id='phone' name='phone' type='text'placeholder='(xx) 9xxxx-xxxx' data-mask='[-]+55 (00) 00000-0000' required maxLength={20} className={styles.input}/>
</FormGroup>
</Form>
<Button>Registrar</Button>
</Container>
</main>
)
}
export default Register