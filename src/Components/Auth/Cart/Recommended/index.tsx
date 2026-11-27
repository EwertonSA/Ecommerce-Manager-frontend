import { productService, ProductType } from "@/src/Service/productService"
import { Card } from "./Card"
import useSWR from 'swr'
const fetch=async()=>{
const res= await productService.getBestSelling()
return res.data
}
export const Recommended=()=>{
const {data,error,isLoading}=useSWR<ProductType[]>('ecommerce',fetch)
if(isLoading)return <p>Carregando...</p>
if(error)return <p>Erro ao carregar</p>
return(
<>
<Card products={data??[]}/>
</>
)
}