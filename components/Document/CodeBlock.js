import React from 'react'
import styles from './Documents.module.scss'

const CodeBlock = ({ code, list, pre }) => {
  return (
    <>
      <div className={styles.code}>
        <code>{code}</code>
      </div>
      <pre className={styles.pre}>{pre}</pre>
      {Array.isArray(list) && (
        <ul className={styles.codeList}>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default CodeBlock
