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

const productService={
getNewestProduct:async()=>{
const res=await api.get("/products/newest").catch((err)=>{
console.log(err.response.data.message)
return err.response
})
return res
}
}