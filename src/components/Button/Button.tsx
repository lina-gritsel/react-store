import classNames from 'classnames'
import { FC, MouseEvent } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  className?: string
  outlined?: boolean
  isDisabled?: boolean
  onClick?: (args?: MouseEvent<HTMLButtonElement> | TouchEvent) => void
  children: JSX.Element[] | JSX.Element
}

export const Button: FC<ButtonProps> = ({
  className,
  outlined,
  isDisabled = false,
  onClick,
  children,
}) => (
  <button
    className={classNames(
      styles.primaryButton,
      { [styles.outlined]: outlined },
      { [styles.disabled]: isDisabled },
      className,
    )}
    onClick={!isDisabled ? onClick : null}
  >
    {children}
  </button>
)

export default Button
