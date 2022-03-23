import styles from './Header.module.css';

function Image({src, alt}) {
    return (
        <>
            <a href='/'><img className={styles.image} src={src} alt={alt}/></a>
        </>
    )
}

export default Image;