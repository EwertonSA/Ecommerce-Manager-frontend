import { useCart } from '../useCart'
import styles from './styles.module.scss'
export const CartAmount=()=>{
const {cartAmount}=useCart()
return(
<>
<h1 className={styles.amount}>Total: R$ {cartAmount.toFixed(2)}</h1>
</>
)
}