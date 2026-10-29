'use client'
import { ProductType } from '@/app/Service/productService'
import styles from './styles.module.scss'
import { Button, Container } from 'reactstrap'
import { SlideComponent } from '../../Components/Common/SlideComponent'
import Link from 'next/link'
interface props{
newestProducts:ProductType[]
}

export const SlideSection= ({newestProducts}:props)=>{
return <>
<Container className='d-flex flex-column align-items-center py-5'>
<p className={styles.title}>Produtos Disponíveis</p>
<SlideComponent products={newestProducts}/>
<Link href='/register'><Button outline color='light' className={styles.btn}>Se Cadastre Para Acessar</Button></Link>
</Container>
</>
}