import { ProductType } from '@/src/Service/productService'
import styles from './styels.module.scss'
export interface RecommendedProps{
products:ProductType[]
}
export const Card=({products}:RecommendedProps)=>{
return(
<div className={styles.container}>
<h1>Você também pode gostar</h1>
{products.map((product)=>(
<div key={product.id} className={styles.main}>
<img src={product.thumbnail} alt={product.name}  className={styles.img}/>
<p>{product.name}</p>
<p>{product.price}</p>
</div>
))}
</div>
)
}