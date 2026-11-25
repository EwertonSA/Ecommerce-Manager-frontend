import { useCart } from '../useCart'
export const CartAmount=()=>{
const {cartAmount}=useCart()
return(
<>
<h1>Total: R$ {cartAmount.toFixed(2)}</h1>
</>
)
}