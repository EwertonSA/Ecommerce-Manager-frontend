import { SlideComponent } from "@/src/Components/Common/SlideComponent"
import { RecommendedProps } from "../Recommended/Card"

export const SlideRecommeded=({products}:RecommendedProps)=>{
return(
<SlideComponent products={products}/>
)
}