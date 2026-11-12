'use client'
import { useCart } from "./useCart"
import styles from '../GetAllProducts/styles.module.scss'
import { Container, Input } from "reactstrap"
import { Buttons } from "./Buttons"
export const Cart=()=>{
const {cart,handleDecrease,handleIncrease}=useCart()

return(<div className={styles.main}>
{cart.map((product)=>{
const baseUrl= process.env.NEXT_PUBLIC_BASEURL
const imgUrl=`${baseUrl}/${product.thumbnail}`
return(

<div key={product.id} className={styles.card}>
<Container className={styles.container}>   
<img src={imgUrl} alt={product.name} className={styles.img}/>
<p>{product.name}</p>

<p>{product.price}</p>
<Buttons product={product} onIncrease={handleIncrease} onDecrease={handleDecrease}/>
</Container>
</div>
)})}
</div>
)
}