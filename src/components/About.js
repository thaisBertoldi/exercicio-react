import styles from './About.module.css'

function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre a DBC</h1>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/LKc7sQsSu4Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className={styles.aboutParagrafos}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam tenetur soluta tempora mollitia reiciendis reprehenderit velit hic quisquam recusandae facere ipsum, animi esse impedit maiores provident eligendi ea molestias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, aliquam. A velit, hic dignissimos sed cumque neque aspernatur dolores, atque tenetur possimus ratione natus rem repellendus labore? Voluptatibus, quod dolore.</p>
            </div>
        </div>
    )
}

export default About;