import { FC } from 'react'

import styles from './Content.module.scss'
import { SortIcon } from '../../icons'
import Card from '../Card/Card'
import { TYPES_PIZZA } from './mocData'

export const Content: FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.categories}>
            <ul className={styles.categoriesList}>
              <li className={styles.categoriesValue}>Все</li>
              <li className={styles.categoriesValue}>Мясные</li>
              <li className={styles.categoriesValue}>Вегетарианская</li>
              <li className={styles.categoriesValue}>Гриль</li>
              <li className={styles.categoriesValue}>Острые</li>
              <li className={styles.categoriesValue}>Закрытые</li>
            </ul>
          </div>
          <div className={styles.sort}>
            <div className={styles.label}>
              <SortIcon />
              <b>Сортировка по:</b>
              <span>популярности</span>
            </div>
            <div className={styles.popup}>
              <ul className={styles.popupList}>
                <li className={styles.sortValue}>популярности</li>
                <li className={styles.sortValue}>цене</li>
                <li className={styles.sortValue}>алфавиту</li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className={styles.title}>Все пиццы</h2>
        <div className={styles.contentItems}>
          {TYPES_PIZZA.map(({image,name, price}, id) => (
            <Card
              key={id}
              image={image}
              name={name}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
