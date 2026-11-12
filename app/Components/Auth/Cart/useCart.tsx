'use client'
import { useEffect, useState } from "react"
import { ProductType } from '@/app/Service/productService'
export interface CartType extends ProductType{quantity:number}
export const CART= 'ecommerce'
export const useCart=()=>{
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
return{cart,setCart,addToCart,removeFromCart,clearCart,handleIncrease, handleDecrease}
}


