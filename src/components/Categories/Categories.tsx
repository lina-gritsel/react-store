import classNames from 'classnames'
import { FC, useState } from 'react'

import styles from './Categories.module.scss'
import { CATEGORIES } from './mocData'

export const Categories: FC = () => {
    const [activeCategories, setactiveCategories] = useState<number>(0)

  return (
    <div className={styles.categories}>
      <ul className={styles.categoriesList}>
        {CATEGORIES.map((category, id) => (
          <li key={id} className={classNames(styles.categoriesValue,
            activeCategories === id ? styles.active : ''
            )}
            onClick={() => setactiveCategories(id)}
            >{category}</li>
        ))}
      </ul>
    </div>
  )
}
