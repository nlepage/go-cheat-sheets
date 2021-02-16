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
          <div className={styles.column}>
            <section className={styles.section}>
              <h2>Packages</h2>
              TODO
            </section>

            <section className={styles.section}>
              <h2>Imports</h2>
              {go`
                package main

                import (
                    "fmt" // Import package fmt
                    "math/rand" // Import package rand
                )

                func main() {
                    fmt.Println(rand.Int())
                }
              `}
            </section>

            <section className={styles.section}>
              <h2><code>main</code> package</h2>
              <p>Go programs start by running the <code>main()</code> function of package <code>main</code>:</p>
              {go`
                package main

                import "fmt"

                func main() {
                    fmt.Println("Hello 🐶!")
                    // Prints "Hello 🐶!" on stdout
                }
              `}
            </section>
          </div>

          <div className={styles.column}>
            col2
          </div>

          <div className={styles.column}>
            col3
          </div>
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