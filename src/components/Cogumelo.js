import styles from './Cogumelo.module.css'
import Logo from "./Logo";

function Cogumelo() {
    return (
        <>
            <div className={styles.cogumelo}>
                <Logo />
                <span>Primeiro Cogumelo</span>
            </div>
            <div className={styles.cogumelo}>
                <Logo />
                <span>Segundo Cogumelo</span>
            </div>
            <div className={styles.cogumelo}>
                <Logo />
                <span>Terceiro Cogumelo</span>
            </div>
        </>
    )
}

export default Cogumelo;