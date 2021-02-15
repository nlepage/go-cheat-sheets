import Head from 'next/head'
import hljs from 'highlight.js/lib/core'
import go from 'highlight.js/lib/languages/go'

import styles from '../styles/language.module.css'
import { useEffect } from 'react'

export default function Language() {
  useEffect(() => {
    hljs.registerLanguage('go', go)
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block)
    })
  }, [])

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
        <pre>
          <code className="go">{`
package main

import "fmt"

func main() {
    fmt.Println("Hello world!")
}
          `}</code>
        </pre>
      </main>
    </div>
  )
}