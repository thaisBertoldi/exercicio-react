import Logo from "./Logo";
import styles from './HomePage.module.css'

function HomePage() {
    return (
        <>
            <h1 className={styles.homeTitulo}>Estamos aprendendo React com o melhor professor da galáxia</h1>
            <div className={styles.homePage}>
                <div className={styles.homeSpan}>
                    <Logo />
                    <span>Primeiro Cogumelo</span>
                </div>
                <div className={styles.homeSpan}>
                    <Logo />
                    <span>Segundo Cogumelo</span>
                </div>
                <div className={styles.homeSpan}>
                    <Logo />
                    <span>Terceiro Cogumelo</span>
                </div>
                <div className={styles.homeParagrafos}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas ab fuga quo iure blanditiis possimus et esse, asperiores non iusto aspernatur distinctio placeat eveniet sed qui aut voluptatibus, tempora commodi repellat expedita quod vero dignissimos. Enim sint hic voluptate dolores mollitia facere nihil unde suscipit officia modi assumenda eum reprehenderit, necessitatibus amet nisi obcaecati nemo velit doloribus voluptates numquam nam eveniet. Illo placeat reiciendis fugiat minus sed fugit labore excepturi, voluptate praesentium alias recusandae in, laudantium iste cupiditate magni id aliquid animi quos neque quod atque modi impedit fuga illum? Quibusdam, modi voluptatibus dolorum voluptatem repudiandae velit reprehenderit dolore!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum corrupti magni quisquam laudantium, quo provident ad doloremque adipisci accusamus architecto voluptas modi expedita esse enim temporibus odio. Nihil, adipisci laboriosam dolorem odit facere ducimus sunt! Sequi, amet sit cum porro officiis quam id ipsa illum, odit non laborum ad! Corporis vitae ducimus dolorem quaerat enim!</p>
                </div>
            </div>
        </>
    )
}
export default HomePage;