import cogumelo from '../images/cogumelo.png';
import styles from './Header.module.css';

function Logo() {
    return (
        <>
            <a ><img className={styles.logo} src={cogumelo} alt="Cogumelo do Mário"/></a>
        </>
    )
}

export default Logo;