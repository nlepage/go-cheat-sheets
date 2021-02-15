import { useEffect } from 'react'
import hljs from 'highlight.js/lib/core'
import hljsGo from 'highlight.js/lib/languages/go'

hljs.registerLanguage('go', hljsGo)

export function go([s]) {
  return code(s, 'go')
}

function code(code, language) {
  let lines = code.split('\n')
  if (lines[0] === '') lines = lines.slice(1)
  if (/^ +$/.test(lines[lines.length - 1])) lines = lines.slice(0, lines.length - 1)
  const indent = lines.map(line => /^ +/.exec(line)?.[0].length).filter(v => v).reduce((a, b) => Math.min(a, b))
  const prefix = ' '.repeat(indent)
  lines = lines.map(line => line.startsWith(prefix) ? line.substr(indent) : line)
  return <Code language={language}>{lines.join('\n')}</Code>
}

function Code({ language, children }) {
  return <pre><code className={language}>{children}</code></pre>
}

export function useCode() {
  useEffect(() => {
    hljs.highlightAll()
  }, [])
}