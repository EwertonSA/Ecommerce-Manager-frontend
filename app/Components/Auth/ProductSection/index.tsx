'use client'
import { productService, ProductType } from '@/app/Service/productService'
import styles from './styles.module.scss'
import useSWR from 'swr'
import { Button, Container } from 'reactstrap'
import Link from 'next/link'
import { FaCartPlus, FaShoppingBag, FaShoppingCart} from 'react-icons/fa'
export const ProductSession=()=>{
const {data:response,error}=useSWR('/products/selled',productService.getBestSelling)
if(error) return error
if(!response) return <p>Loading...</p>
const baseUrl=process.env.NEXT_PUBLIC_BASEURL
return(<>
{response.data.map((product:ProductType)=>{
const imgUrl=encodeURI(`${baseUrl}/${product.thumbnail}`)
return(
<div 
style={{backgroundImage:`linear-gradient(to bottom, #6666661a, #151515), url(${imgUrl})`, backgroundSize:'cover', 
backgroundPosition:'center',height:'480px'}}
 key={product.id}>
<Container className='pt-4'>
<p className={styles.title}>{product.name}</p>
<p className={styles.description}>{product.description}</p>
<p className={styles.price}>{product.price}</p>
<p className={styles.quantity}>{product.stockQuantity}</p>
<Link href={`/products/${product.id}`}>
<Button outline color='light' className={styles.button}>Comprar <FaCartPlus className='py-5' /> </Button></Link>
</Container>
</div>
)})[1]}
</>)
}