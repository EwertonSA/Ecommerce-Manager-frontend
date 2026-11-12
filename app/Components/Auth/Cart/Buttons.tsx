import { Button, Input } from "reactstrap"
import { CartType, useCart } from "./useCart"
import { addProps } from "../../Common/AddToCart"
import { ProductType } from "@/app/Service/productService"
interface props{
product:CartType,
onIncrease:(id:number)=>void
onDecrease:(id:number)=>void
}
export const Buttons=({product, onIncrease, onDecrease}:props)=>{

return(
<>
<span className="font-bold">{product.quantity ?? 1}</span>
<Button onClick={()=>onIncrease(product.id)}>+</Button>
<Button onClick={()=>onDecrease(product.id)}>-</Button>
</>
)
}