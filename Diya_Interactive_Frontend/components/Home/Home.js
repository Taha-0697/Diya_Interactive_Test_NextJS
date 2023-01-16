import styles from '../../styles/Home.module.scss'
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>      
        <h1 className={styles.title}>
            Welcome to <span>Diya Interactive Test</span>
        </h1> 
            <h2 className={styles.link}>
            <Link
            href='/Jobs'
            >Let&rsquo;s Begin</Link>
            </h2>
        </main>
    </div>
  )
}

export default Home