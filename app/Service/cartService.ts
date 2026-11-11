import { ProductType } from '@/app/Service/productService'
import { CART, CartType, useCart } from '../Components/Auth/Cart/useCart'
const {cart,setCart,}=useCart()
export const cartService={
showCart:()=>{
return cart
},
}