import { ProductType } from '@/src/Service/productService'
import { CART, CartType, useCart } from '../Components/Auth/Cart/useCart'
const {cart}=useCart()
export const cartService={
showCart:()=>{
return cart
},
}