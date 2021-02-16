import Head from 'next/head'

import { Page, go, useCode } from '../components'

import styles from '../styles/language.module.css'

export default function Language() {
  useCode()
  
  return (
    <>
      <Head>
        <title>Go language cheat sheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Go language cheat sheet
          </h1>
          <img src="z-gopher-g.png" className={styles.titleGopher} />
        </header>
        <main className={styles.main}>
          <section className={styles.section}>
            <h2>Variables</h2>
            <p>Some text blahblah...<br /> Some other text...</p>
            {go`
              package main

              import "fmt"

              func main() {
                  fmt.Println("Hello variables!")
              }
            `}
          </section>
        </main>
      </Page>

      <Page>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Go language cheat sheet
          </h1>
          <img src="z-gopher.png" className={styles.titleGopher} />
        </header>
        <main className={styles.main}>
          {go`
            package main

            import "fmt"

            func main() {
                fmt.Println("Hello world!")
            }
          `}
        </main>
      </Page>
    </>
  )
}