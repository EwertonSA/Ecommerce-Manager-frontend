'use client'
import { useCart } from "./useCart"
import styles from './style.module.scss'
import { Container, Input } from "reactstrap"
import { Buttons } from "./Buttons"
import { CartAmount } from "./CartAmount"
export const Cart=()=>{
const {cart,handleDecrease,handleIncrease}=useCart()
return(<div className={styles.main}>
<CartAmount/>
<h1 className={styles.title}>Produtos adicionados ao carrinho</h1>
{cart.map((product)=>{
const baseUrl= process.env.NEXT_PUBLIC_BASEURL
const imgUrl=`${baseUrl}/${product.thumbnail}`
return(
<div key={product.id} className={styles.card}>
<Container className={styles.container}> 
<div className={styles.side}>
<img src={imgUrl} alt={product.name} className={styles.img}/>
<p>{product.name}</p>
<p>{product.price}</p>
</div>
<Buttons product={product} onIncrease={handleIncrease} onDecrease={handleDecrease}/>
</Container>
</div>
)})}
</div>
)
}