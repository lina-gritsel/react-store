import { FC } from 'react'

import styles from './Header.module.scss'
import { Icon } from '../../icons'
import logoIcon from '../../icons/logo.svg'

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className= {styles.headerContent}>
          <img className={styles.headerImg} width="38" src={logoIcon} alt="Pizza logo" />
          <div>
            <h1 className={styles.title}>React Pizza</h1>
            <p className={styles.subtitle}>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className={styles.cart}>
          <a href="/cart.html" className={styles.button}>
            <span>520 ₽</span>
            <div className={styles.delimiter}></div>
            <Icon/>
            <span className={styles.amountCart}>3</span>
          </a>
        </div>
      </div>
    </div>
  )
}
