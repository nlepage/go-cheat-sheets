import Head from 'next/head'

import { go, useCode } from '../components/code'
import styles from '../styles/language.module.css'

export default function Language() {
  useCode()
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Go language cheat sheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Go language cheat sheet!
        </h1>
        <p>
          Test
        </p>
        {go`
          package main

          import "fmt"

          func main() {
              fmt.Println("Hello world!")
          }
        `}
      </main>
    </div>
  )
}