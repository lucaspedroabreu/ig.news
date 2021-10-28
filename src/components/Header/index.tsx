import styles from './styles.module.scss'
import React from 'react'

export default function Header() {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerContainer}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a href="">Home</a>
                    <a href="">Posts</a>
                </nav>
            </div>
        </header>
    )
}
