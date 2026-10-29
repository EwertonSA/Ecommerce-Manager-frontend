import styles from './styles/NoAuth.module.scss'
import { HeaderNoAuth } from "./(NoAuth)/Header/page";
import { Presentation } from "./(NoAuth)/Presentation/page";
import { CardSection } from './(NoAuth)/CardSection/page';
import { SlideSection } from './(NoAuth)/SlideSection';
import { productService } from './Service/productService';
import { Suspense } from 'react';
import { Footer } from './Components/Common/Footer';
import { AosInit } from './Components/Common/Aos';

async function NewestProducts() {
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