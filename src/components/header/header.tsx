import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header_container}>
                    <Link href="/">
                        <Image className={styles.logo} src="/assets/logo.png" alt="logo" width={90} height={90}/>
                    </Link>

                    <ul className={styles.socialmedia__list}>
                        <li>
                            <Link href="/">
                                <Image src='/assets/header/instagram.svg' alt="instagram" width={25} height={25}/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image src='/assets/header/telegram.svg' alt="telegram" width={25} height={25}/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image src='/assets/header/youtube.svg' alt="telegram" width={25} height={25}/>
                            </Link>
                        </li>
                    </ul>

                    <nav className={styles.header_nav}>
                        <ul className={styles.header_nav__list}>
                            <li>
                                <Link href="/main">Bosh</Link>
                            </li>
                            <li>
                                <Link href="/about-us">Biz haqimizda</Link>
                            </li>
                            <li>
                                <Link href="/services">Xizmatlarimiz</Link>
                            </li>
                            <li>
                                <Link href="/universities">Universitetlar</Link>
                            </li>
                            <li>
                                <Link href="/our-students">Bizning talabalar</Link>
                            </li>
                            <li>
                                <Link href="/news">Yangiliklar</Link>
                            </li>
                            <li>
                                <Link href="/contacts">Bog&lsquo;lanish</Link>
                            </li>
                        </ul>

                        <Link href="/quote" className={styles.header_quote}>
                            <div>
                                <Image src="/assets/header/chaticon.svg" alt="chat" width={18} height={18}/>
                            </div>
                            Ariza qo&lsquo;ldirish
                        </Link>
                    </nav>



                </div>
            </div>
        </header>
    );
}

export default Header;