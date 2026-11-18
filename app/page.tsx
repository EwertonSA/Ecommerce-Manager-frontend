import styles from '../src/styles/NoAuth.module.scss'
import { HeaderNoAuth } from "../src/(NoAuth)/Header/page";
import { Presentation } from "../src/(NoAuth)/Presentation/page";
import { CardSection } from '../src/(NoAuth)/CardSection/page';
import { SlideSection } from '../src/(NoAuth)/SlideSection';
import { productService } from '../src/Service/productService';
import { Suspense } from 'react';
import { Footer } from '../src/Components/Common/Footer';
import { AosInit } from '../src/Components/Common/Aos';

export const NewestProducts=async()=> {
  const products = await productService.getNewestProduct()
  return <SlideSection newestProducts={products} />
}

export default function Home() {
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
<Suspense fallback={<p role="status" className="py-5 text-center">Carregando produtos...</p>}>
<NewestProducts />
</Suspense></div>
</main>
</>
)
}