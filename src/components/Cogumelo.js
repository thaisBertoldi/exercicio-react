import styles from './Cogumelo.module.css'
import Image from "./Image";
import esquilo from '../images/esquilo.png'

function Cogumelo() {
    return (
        <>
            <div className={styles.cogumelo}>
                <Image src={esquilo} alt="Esquilo"/>
                <span>Primeiro esquilo</span>
            </div>
            <div className={styles.cogumelo}>
                <Image src={esquilo} alt="Esquilo"/>
                <span>Segundo esquilo</span>
            </div>
            <div className={styles.cogumelo}>
                <Image src={esquilo} alt="Esquilo"/>
                <span>Terceiro esquilo</span>
            </div>
        </>
    )
}

export default Cogumelo;