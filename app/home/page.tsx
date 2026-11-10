import { Suspense } from "react";
import { SlideSection } from "../(NoAuth)/SlideSection";
import { ProductSession } from "../Components/Auth/ProductSection";
import { NewestProducts } from "../page";
import { productService } from "../Service/productService";
import { GetAllProducts } from "../Components/Auth/GetAllProducts";

export default async function Home(){
return(
<>
<ProductSession/>
<GetAllProducts/>
</>
)
}