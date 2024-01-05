import styles from './styles/page.module.css'
import Products from '@/components/products';

export default async function Home() {
  return (
    <main className={styles.main}>
      <Products />
    </main>
  )
}
