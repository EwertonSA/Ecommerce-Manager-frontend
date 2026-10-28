'use client'
import { ProductType } from "@/app/Service/productService";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css'
import { SlideCard } from "../SlideCard";

interface props{
products:ProductType[]
}
export const SlideComponent=({products}:props)=>{
let count= 0
if(products.length>4){count=4}else if(products){count=products.length}
return(
<>
<div className="d-flex flex-coloumn align-items-center py-2">
<Splide options={{type:'loop',perPage:count, perMove:1, width:count*300, pagination:false,
arrows:products.length>4?true:false,
drag:products.length>4?true:false,
breakpoints:{
1200:{perPage:count>=2?2:1,width:count>=2?600:300,arrows:products.length>4?true:false,
drag:products.length>4?true:false},
600:{perPage:1,width:300,arrows:products.length>4?true:false,
drag:products.length>4?true:false},
300:{width:250}
}
}}>
{products.map((product)=>(
<SplideSlide key={product.id}>
<SlideCard product={product}></SlideCard>
</SplideSlide>))}
</Splide>
</div>
</>
)
}