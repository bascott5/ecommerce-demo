import styles from './styles/page.module.css';
import Index from '.';

export default async function Home() {
  return (
    <main className={styles.main}>
      <Index />
    </main>
  )
}
