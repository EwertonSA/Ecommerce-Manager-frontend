'use client'
import { Button, Col, Container, Row } from 'reactstrap';
import styles from './styles.module.scss';
import { FaArrowDown, FaPlay } from 'react-icons/fa';
import Link from 'next/link';
export const Presentation=()=>{
return(
<>
<Container fluid className="py-4 px-3">
<Row>
<Col lg className="d-flex flex-column justify-content-center align-items-start">
<p className={styles.subtitle}>ACESSO ILIMITADO</p>
<p className={styles.title}>Tenha acesso aos melhores<br/>artigos da região</p>
<p className={styles.description}>Compre e veja ofertas a qualquer momento e de uma<br/> repaginada no visual</p>
<Link href='/register'><Button className={styles.btnCta}>ACESSE AGORA <FaPlay className={styles.btnImg}/></Button></Link>
</Col>
<Col lg>
<img src="/presentation.png" alt="" className={styles.imgPresentation}/>
</Col>
</Row>
<Row>
    <Col><FaArrowDown className={styles.arrow}/></Col>
</Row>
</Container>
</>    
)
}