import styles from '../../styles/layout.module.scss'

export default function Layout({ children } : Partial<any>) {
    return (
      <>
        <header className={styles.header}>NextJS. Cookbook</header>
        <main>{children}</main>
        <footer className={styles.footer}>2022. All rights reserved</footer>
      </>
    )
  }