'use client'
import { ProductType } from "@/app/Service/productService";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css'
import { SlideCard } from "../SlideCard";

interface props{
products:ProductType[]
}
export const SlideComponent=({products}:props)=>{
return(
<>
<div>
    <Splide options={{type:'loop',perPage:4, perMove:1, pagination:false}}>
        {products.map((product)=>(
            <SplideSlide key={product.id}>
                <SlideCard product={product}></SlideCard>
            </SplideSlide>))}
    </Splide>
</div>
</>
)
}