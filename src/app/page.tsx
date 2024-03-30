import styles from "./page.module.css";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
      <>
        <Header/>
        <main className={styles.main}>
            <Hero/>
        </main>
      </>
  );
}
