import React, { FC, useState } from 'react'

import styles from './Card.module.scss'
import { PlusIcon } from '../../icons'
import Button from '../Button/Button'
import classNames from 'classnames'

interface CardProps {
  name: string
  price: string
  image: string
}

enum Kinds {
  THIN = 'thin',
  TRADITIONAL = 'traditional',
}

enum Sizes {
  SMALL = '26',
  AVERAGE = '30',
  LARGE = '40',
}

const Card: FC<CardProps> = ({ image, name, price }) => {
  const [productCount, setProductCount] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<Sizes>(Sizes.SMALL)
  const [activeKinds, setActiveKinds] = useState<Kinds>(Kinds.THIN)

  return (
    <div className={styles.pizzaBlock}>
      <img className={styles.pizzaImage} src={image} alt="Pizza" />
      <h4 className={styles.cartTitle}>{name}</h4>
      <div className={styles.selector}>
        <ul className={styles.cartList}>
          <li
            className={classNames(
              styles.value,
              activeKinds === Kinds.THIN && styles.activeValue,
            )}
            onClick={() => setActiveKinds(Kinds.THIN)}
          >
            {Kinds.THIN}
          </li>
          <li
            className={classNames(
              styles.value,
              activeKinds === Kinds.TRADITIONAL && styles.activeValue,
            )}
            onClick={() => setActiveKinds(Kinds.TRADITIONAL)}
          >
            {Kinds.TRADITIONAL}
          </li>
        </ul>
        <ul className={styles.cartList}>
          <li
            className={classNames(
              styles.value,
              activeSize === Sizes.SMALL && styles.activeValue,
            )}
            onClick={() => setActiveSize(Sizes.SMALL)}
          >
            {Sizes.SMALL}
          </li>
          <li
            className={classNames(
              styles.value,
              activeSize === Sizes.AVERAGE && styles.activeValue,
            )}
            onClick={() => setActiveSize(Sizes.AVERAGE)}
          >
            {Sizes.AVERAGE}
          </li>
          <li
            className={classNames(
              styles.value,
              activeSize === Sizes.LARGE && styles.activeValue,
            )}
            onClick={() => setActiveSize(Sizes.LARGE)}
          >
            {Sizes.LARGE}
          </li>
        </ul>
      </div>
      <div className={styles.cartBottom}>
        <div className={styles.cartPrice}>от {price} ₽</div>
        <Button onClick={() => setProductCount((prev) => prev + 1)}>
          <PlusIcon />
          <span className={styles.add}>Добавить</span>
          <i className={styles.amount}>{productCount}</i>
        </Button>
      </div>
    </div>
  )
}

export default Card
