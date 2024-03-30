import styles from "./hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero_bg}/>
            <div className={styles.hero_bg_bottom}/>
            <div className="container">
                <div className="hero_container">
                    <h1>Italiyada grant asosida o&apos;qish</h1>
                </div>
            </div>
        </section>
    );
}

export default Hero;