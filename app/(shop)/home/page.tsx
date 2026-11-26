import { Suspense } from "react";
import { SlideSection } from "../../../src/(NoAuth)/SlideSection";
import { ProductSession } from "../../../src/Components/Auth/ProductSection";
import { NewestProducts } from "../../page";
import { productService } from "../../../src/Service/productService";
import { GetAllProducts } from "../../../src/Components/Auth/GetAllProducts";

export default async function Home(){
return(
<>
<ProductSession/>
<GetAllProducts/>
</>
)
}