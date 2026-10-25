import styles from './styles/NoAuth.module.scss'
import { HeaderNoAuth } from "./Components/NoAuth/Header/page";
import { Presentation } from "./Components/NoAuth/Presentation/page";
import { CardSection } from './Components/NoAuth/CardSection/page';
import { SlideSection } from './Components/NoAuth/slideSection';
import { GetStaticProps } from 'next';
import { productService, ProductType } from './Service/productService';
import { ReactNode, Suspense } from 'react';



export default async function Home() {
const product=await productService.getNewestProduct()
return (
<>
<main>
<div className={styles.sectionBackground}>
<HeaderNoAuth/>
<Presentation/>
</div>
<CardSection/>
<Suspense><SlideSection newestProducts={product}></SlideSection></Suspense>
</main>
</>
)
}