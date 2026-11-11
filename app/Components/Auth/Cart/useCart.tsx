'use client'
import { useEffect, useState } from "react"
import { ProductType } from '@/app/Service/productService'
export interface CartType extends ProductType{quantity:number}
export const CART= 'ecommerce'
export const useCart=()=>{
const [cart,setCart]=useState<CartType[]>([])
useEffect(()=>{
try {
localStorage.setItem(CART,JSON.stringify(cart))
} catch (error) {
console.error("Erro ao salvar produto no carrinho")    
}
},[cart])
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
return{cart,setCart,addToCart,removeFromCart,clearCart}
}


