import { error } from 'console'
import {api} from './api'

export type OrderType={
id:number
customerId:number
adressId:number
status:string
totalAmount:number
shippingFee:string
}
export type ProductType={
id:number;
name:string
description:string
price:number
stockQuantity:number
thumbnail:string
orders?:OrderType[]
}

export const productService={
getNewestProduct: async (): Promise<ProductType[]> => {
const res = await api.get<ProductType[]>("/products/newest")
return res.data
},
getProducts:async()=>{
const token= sessionStorage.getItem('ecommerce')
const res= await api.get<ProductType[]>('/products',{
headers:{Authorization:`Bearer ${token}`}
}).catch((err)=>{
console.log(err.response.data.message) 
return err.response})
return res
}
}