import styles from './styles.module.css';
import classnames from 'classnames';
import { Sizes } from '../../constants/sizes';
import { ButtonTypes } from './constants';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export const Button = ({
  children,
  size = Sizes.m,
  type = ButtonTypes.primary,
  onClick,
  className,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      className={classnames(styles.root, className, styles[size], styles[type])}
      onClick={onClick}>
      {children}
    </button>
  );
};
