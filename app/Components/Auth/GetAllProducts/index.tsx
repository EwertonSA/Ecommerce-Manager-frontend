'use client'
import { productService, ProductType } from '@/app/Service/productService'
import useSWR from 'swr'
import styles from './styles.module.scss'
import { Button, Container } from 'reactstrap'
import { FaCartPlus, FaShoppingBag, FaShoppingCart,FaWarehouse} from 'react-icons/fa'
import Link from 'next/link'
export const GetAllProducts=()=>{
const {data:response, error}=useSWR('/products', productService.getProducts)
if(error) return error
if(!response) return <p>Loading...</p>
const baseUrl=process.env.NEXT_PUBLIC_BASEURL

return(
<>
<div className={styles.main}>
{response.data.map((product:ProductType)=>{
const imgUrl=encodeURI(`${baseUrl}/${product.thumbnail}`)
return(    
<div className={styles.card}>
<Container className={styles.container}  key={product.id}>
<img src={imgUrl} className={styles.img}/>
<p className={styles.name}>{product.name}</p>
<p className={styles.description}>{product.description}</p>
<div className={styles.value}>
<p className={styles.price}>R${product.price}</p>
<p className={styles.data}><FaWarehouse/> {product.stockQuantity}</p>
</div>
</Container>
<div  className={styles.actions}>
<Link className={styles.link} href={`/products/${product.id}`}>
<Button outline className={styles.btn}>Ver</Button></Link>
<Button outline className={styles.btnAdd}>Adicionar</Button>
</div>
</div>
)
})}
</div>
</>
)
}