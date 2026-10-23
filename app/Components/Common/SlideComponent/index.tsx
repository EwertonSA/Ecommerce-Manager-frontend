import { ProductType } from "@/app/Service/productService";
import {Splide, SplideSplide} from "@splidejs/react-splide";
import "@splidejs/splide/css/splide.min.css"
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
            <SplideSplide key={product.id}>
                <SlideCard product={product}></SlideCard>
            </SplideSplide>))}
    </Splide>
</div>
</>
)
}