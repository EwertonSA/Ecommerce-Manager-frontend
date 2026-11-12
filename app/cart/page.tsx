import { Suspense } from "react"
import { Cart } from "../Components/Auth/Cart"

export default function CartItems(){
return(
    <>
    <Suspense>
    <Cart/></Suspense>
    </>
)
}