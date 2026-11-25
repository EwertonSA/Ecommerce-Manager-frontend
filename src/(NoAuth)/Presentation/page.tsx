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
<Col lg className="d-flex flex-column justify-content-center align-items-center">
<p className={styles.subtitle}>ACESSO ILIMITADO</p>
<p className={styles.title}>Tenha acesso aos melhores<br/>artigos da região</p>
<p className={styles.description}>Compre e veja ofertas a qualquer momento e de uma<br/> repaginada no visual</p>
<Button tag={Link} href='/register' className={styles.btnCta}>ACESSE AGORA <FaPlay className={styles.btnImg}/></Button>
</Col>
<Col lg>
<img src="/presentation.png" alt="" className={styles.imgPresentation}/>
</Col>
</Row>
<Row>
<Col onClick={()=>window.scrollBy({top:window.innerHeight, behavior:'smooth'})} className={styles.arrow}><FaArrowDown className={styles.test}/></Col>
</Row>
</Container>
</>    
)
}