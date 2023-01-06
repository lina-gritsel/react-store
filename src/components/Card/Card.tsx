import React, { FC } from 'react'

import styles from './Card.module.scss'
import { PlusIcon } from '../../icons'


interface CardProps {
  name: string
  kinds: string[]
  sizes: string[]
  price: string
  image: string
}

const Card: FC<CardProps> = ({ image, name, kinds, sizes, price }) => {
  return (
    
      <div className={styles.pizzaBlock}>
        <img className={styles.pizzaImage} src={image} alt="Pizza" />
        <h4 className={styles.cartTitle}>{name}</h4>
        <div className={styles.selector}>
          <ul className={styles.cartList}>
            {kinds.map((kind, id) => (
              <li className={styles.activeValue} key={id}>
                {kind}
              </li>
            ))}
          </ul>
          <ul className={styles.cartList}>
            {sizes.map((size, id) => (
              <li key={id} className={styles.activeValue}>
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.cartBottom}>
          <div className={styles.cartPrice}>от {price} ₽</div>
          <div className="button button--outline button--add">
            <PlusIcon />
            <span className={styles.add}>Добавить</span>
            <i className={styles.amount}>2</i>
          </div>
        </div>
      </div>
   
  )
}

export default Card
