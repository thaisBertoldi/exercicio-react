import Image from "./Image";
import styles from './Header.module.css';
import Links from './Links.js'
import cogumelo from '../images/cogumelo.png'

function Header() {
    return (
        <header className={styles.header}>
            <Image src={cogumelo} alt="Cogumelo do Mário"/>
            <span>Melhores alunos do VemSer de todos os tempos (só os do Front, claro)</span>
            <ul className={styles.lista}>
                <Links />
            </ul>
        </header>
    )
}

export default Header;