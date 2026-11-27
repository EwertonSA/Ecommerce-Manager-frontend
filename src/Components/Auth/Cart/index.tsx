'use client'
import { useCart } from "./useCart"
import styles from './style.module.scss'
import { Container, Input } from "reactstrap"
import { Buttons } from "./Buttons"
import { CartAmount } from "./CartAmount"
import { Recommended } from "./Recommended"
import { SlideRecommeded } from "./SlideRecommeded"
export const Cart=()=>{
const {cart,handleDecrease,handleIncrease}=useCart()
return(
<div className={styles.main}>
<h1 className={styles.title}>Produtos adicionados ao carrinho</h1>
<div className={styles.cart}><CartAmount cart={cart}/></div>
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
<div>
<SlideRecommeded products={cart}/>
</div>
</div>
)
}