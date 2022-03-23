import Logo from "./Logo";
import styles from './Header.module.css';
import Links from './Links.js'

function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <span>Melhores alunos do VemSer de todos os tempos (só os do Front, claro)</span>
            <ul className={styles.lista}>
                <Links />
            </ul>
        </header>
    )
}

export default Header;