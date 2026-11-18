import { Button } from 'reactstrap'
import styles from '../../Auth/GetAllProducts/styles.module.scss'
import { CartType, useCart } from '../../Auth/Cart/useCart'
export interface addProps{product:CartType}
export const AddCartButton=({product}:addProps)=>{
const {cart,addToCart}=useCart()
return(
<>
<Button onClick={()=>addToCart(product)} outline className={styles.btnAdd}>Adicionar</Button>
</>
)
}