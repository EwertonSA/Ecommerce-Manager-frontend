import { Container } from 'reactstrap'
import styles from './styles.module.scss'
export const CardSection=()=>{
return(
<>
<p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
<Container className='d-flex flex-wrap justify-content-center gap-4 pb-2'>
<div className={styles.card1}>
<p className={styles.cardTitle}>Colares</p>
<p className={styles.cardDedscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta non maxime eligendi reiciendis
earum esse quisquam? Minus, cumque possimus.</p>
</div>
<div className={styles.card2}>
<p className={styles.cardTitle}>Pingentes</p>
<p className={styles.cardDedscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta non maxime eligendi reiciendis
earum esse quisquam? Minus, cumque possimus.</p>
</div>
<div className={styles.card3}>
<p className={styles.cardTitle}>Anéis</p>
<p className={styles.cardDedscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta non maxime eligendi reiciendis
earum esse quisquam? Minus, cumque possimus.</p>
</div>
<div className={styles.card4}>
<p className={styles.cardTitle}>Piercings</p>
<p className={styles.cardDedscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta non maxime eligendi reiciendis
earum esse quisquam? Minus, cumque possimus.</p>
</div>
<div className={styles.card5}>
<p className={styles.cardTitle}>Pulseiras</p>
<p className={styles.cardDedscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta non maxime eligendi reiciendis
earum esse quisquam? Minus, cumque possimus.</p>
</div>
<div className={styles.card6}>
<p className={styles.cardTitle}>Piercings</p>
<p className={styles.cardDedscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta non maxime eligendi reiciendis
earum esse quisquam? Minus, cumque possimus.</p>
</div>
</Container>
</>
)
}