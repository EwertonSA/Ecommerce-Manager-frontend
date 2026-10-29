import styles from './styles/NoAuth.module.scss'
import { HeaderNoAuth } from "./Components/NoAuth/Header/page";
import { Presentation } from "./Components/NoAuth/Presentation/page";
import { CardSection } from './Components/NoAuth/CardSection/page';
import { SlideSection } from './Components/NoAuth/SlideSection';
import { GetStaticProps } from 'next';
import { productService, ProductType } from './Service/productService';
import { ReactNode, Suspense } from 'react';
import { Footer } from './Components/Common/Footer';
import { AosInit } from './Components/Common/Aos';

export default async function Home() {
const product=await productService.getNewestProduct()
return (
<>
<AosInit/>
<main>
<div className={styles.sectionBackground} data-aos='fade-zoom-in' data-aos-duration='1600'>
<HeaderNoAuth/>
<Presentation/>
</div>
<div data-aos='fade-right' data-aos-duration='1200'>
<CardSection /></div>
<div data-aos='fade-up' data-aos-duration='1000'>
<Suspense><SlideSection newestProducts={product}></SlideSection></Suspense></div>
<Footer/>
</main>
</>
)
}