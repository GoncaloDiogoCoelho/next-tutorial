import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function CarsList(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">Cars</Link> list
        </h1>

        <ul>
          <li>
            <Link href="/cars/tesla">Tesla</Link>
          </li>
          <li>
            <Link href="/cars/ford">Ford</Link>
          </li>
          <li>
            <Link href="/cars/lambo">Lambo</Link>
          </li>
        </ul>
        </main>
    </div>
  )
  }
   