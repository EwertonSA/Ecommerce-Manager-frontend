'use client'
import { ProductType } from '@/app/Service/productService';
import styles from './styles.module.scss';
interface props{
product:ProductType
}
export const SlideCard=({product}:props)=>{
return(
<>
<div className={styles.slide}>
<img 
  src={`${process.env.NEXT_PUBLIC_BASEURL || 'http://localhost:3000'}/${product.thumbnail.replace(/^\//, '')}`} 
  alt={product.name} 
  className={styles.slideImg}
/>
<p className={styles.title}>{product.name}</p>
<p className={styles.description}>{product.description}</p>
</div>
</>
)
}