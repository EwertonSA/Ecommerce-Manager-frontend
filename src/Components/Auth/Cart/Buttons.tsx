import { Button} from "reactstrap"
import { CartType} from "./useCart"
import styles from './style.module.scss'
interface props{
product:CartType,
onIncrease:(id:number)=>void
onDecrease:(id:number)=>void
}
export const Buttons=({product, onIncrease, onDecrease}:props)=>{
return(
<div className={styles.btnCard}>
<span className={styles.quantity} >{product.quantity ?? 1}</span>
<Button onClick={()=>onIncrease(product.id)} className={styles.btn}>+</Button>
<Button onClick={()=>onDecrease(product.id)} className={styles.btn}>-</Button>
</div>
)
}