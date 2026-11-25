'use client'
import { createContext,ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { ProductType } from '@/src/Service/productService'

export interface CartType extends ProductType{quantity:number}
export interface CartContextData{
cart:CartType[]
isLoaded:boolean
addToCart:(product:CartType)=> void
removeFromCart:(id:number)=>void
clearCart:()=>void
cartAmount:number
handleIncrease:(id:number)=>void
handleDecrease:(id:number)=>void
}
export const CART= 'ecommerce'
const CartContext=createContext({}as CartContextData)
export const CartProvider=({children}:{children:ReactNode})=>{
const [cart,setCart]=useState<CartType[]>([])
const [isLoaded, setIsLoaded] = useState(false)
useEffect(()=>{
try {
const value= localStorage.getItem(CART)
if(value)setCart(JSON.parse(value))
} catch (error) {
console.error("Erro ao carregar produtos do carrinho")
}finally{
setIsLoaded(true)
}
},[])
useEffect(()=>{
if(!isLoaded)return
try {
localStorage.setItem(CART,JSON.stringify(cart))
} catch (error) {
console.error("Erro ao salvar produto no carrinho")    
}
},[cart,isLoaded])
const addToCart=(product:CartType)=>{
setCart((prod)=>{
const index=prod.findIndex((p)=>p.id===product.id)
if(index>-1){
const updated=[...prod]
updated[index]={...updated[index], quantity:updated[index].quantity+(product.quantity||1)}
return updated
} 
return[...prod,product]
})}
const removeFromCart=(id:number)=>{
setCart((prod)=>prod.filter((p)=>p.id!==id))
}
const clearCart=()=>{
setCart([])
localStorage.removeItem(CART)
}
const cartAmount=useMemo(()=>{
return cart.reduce((acc,item)=>acc+(item.quantity*Number(item.price)),0)
},[cart])



const handleIncrease=(id:number)=>{
setCart((prod)=>{
return prod.map((p)=>
id===p.id?{...p,quantity:p.quantity+1}:p
)
})
}
const handleDecrease=(id:number)=>{
setCart((prod)=>{
return prod.map((p)=>{
if(id===p.id){
return{...p,quantity:p.quantity-1}}
return p
}
).filter((p)=>p.quantity>0)
})
}
return(
<CartContext.Provider value={{cart,isLoaded,addToCart,removeFromCart,clearCart, cartAmount, handleIncrease,handleDecrease}}>
{children}
</CartContext.Provider>
)}
export const useCart=()=>{
const context=useContext(CartContext)
if(!context)throw new Error("This hook may be used inside a provider")
return context   
}


