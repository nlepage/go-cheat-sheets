import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/index.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Go cheat sheets</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Go cheat sheets!
        </h1>
        <p>
          <Link href="/language">Go language cheat sheet</Link>
        </p>
      </main>
    </div>
  )
}
