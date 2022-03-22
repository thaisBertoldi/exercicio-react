import Logo from "./Logo";
import styles from './Header.module.css';

function Header(){
    return (
        <header className={styles.header}>
            <Logo />
            <span>Melhores alunos do VemSer de todos os tempos (só os do Front, claro)</span>
            <ul className={styles.lista}>
                <li>Home</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </header>
    )
}

export default Header;