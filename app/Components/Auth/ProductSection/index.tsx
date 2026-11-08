'use client'
import { productService, ProductType } from '@/app/Service/productService'
import styles from './styles.module.scss'
import useSWR from 'swr'
import { Button, Container } from 'reactstrap'
import Link from 'next/link'
import { FaCartPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'
export const ProductSession=()=>{
const {data:response,error}=useSWR('/products',productService.getProducts)
if(error) return error
if(!response) return <p>Loading...</p>

return(<>
{response.data.map((product:ProductType)=>(
<div style={{backgroundImage:`linear-gradient(to bottom, #6666661a, #151515), 
url(${process.env.NEXT_PUBLIC_BASEURL}/${product.thumbnail})`, backgroundSize:'cover', 
backgroundPosition:'center',height:'480px'}}
 key={product.id}>
<Container className='pt-4'>
<p className={styles.title}>{product.name}</p>
<p className={styles.description}>{product.description}</p>
<p className={styles.price}>{product.price}</p>
<p className={styles.quantity}>{product.stockQuantity}</p>
<Link href={`/products/${product.id}`}>
<Button outline color='light' className={styles.button}>Comprar <FaCartPlus/> </Button></Link>
</Container>
</div>
))[2]}
</>)
}