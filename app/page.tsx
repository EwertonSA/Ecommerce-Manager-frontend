import styles from './styles/NoAuth.module.scss'
import { HeaderNoAuth } from "./Components/NoAuth/Header/page";
import { Presentation } from "./Components/NoAuth/Presentation/page";
import { CardSection } from './Components/NoAuth/CardSection/page';
export default function Home() {
return (
<>
<head>
<title>Ecommerce tailor-made</title>
<link rel="shortcut icon" href="/favicon.webp" type="image/x-icon" />
<meta property="og:title" content="Ecommerce tailor-made" key="title"/>
<meta name="description" content="Tenha accesso as melhores joias de uma forma fácil e acessível"/>
</head>
<main>
<div className={styles.sectionBackground}>
<HeaderNoAuth/>
<Presentation/>
</div>
<CardSection/>
</main>
</>

)
}
