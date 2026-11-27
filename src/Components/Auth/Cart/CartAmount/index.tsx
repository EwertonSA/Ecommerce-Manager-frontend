import { Button } from 'reactstrap'
import { CartType, useCart } from '../useCart'
import styles from './styles.module.scss'
import Link from 'next/link'
export interface CartProps{
cart:CartType[]
}
export const CartAmount=({cart}:CartProps)=>{
const {cartAmount}=useCart()
const total= cart.reduce((acc,item)=>{
return acc+Number(item.quantity)},0)
return(
<div className={styles.container}>
<div className={styles.address}>
<p>Endereço para frete</p>
<Button tag={Link} href='/address'  className={styles.btn}>Adicionar+</Button>
</div>
<div className={styles.cart}>
<div className={styles.value}>
<p>Produtos({total})</p>
<p className={styles.amount}>Total: R$ {cartAmount.toFixed(2)}</p>
</div>
<div className={styles.cep}>
<p >Envio para: 09798321</p>
</div>
<Button className={styles.btn}>Avançar</Button>
</div>
</div>
)
}