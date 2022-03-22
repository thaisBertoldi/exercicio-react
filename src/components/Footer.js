import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <h1 >Endereço da DBC</h1>
            <iframe className={styles.footerIframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28449.077060102343!2d-52.54837329557075!3d-26.962635517816697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4c898c5a23809%3A0xdea9adeb74f2b75!2sXaxim%2C%20SC%2C%2089825-000!5e0!3m2!1spt-BR!2sbr!4v1645475906787!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy"></iframe>
            <footer>
                <ul className={styles.footerLista}>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;