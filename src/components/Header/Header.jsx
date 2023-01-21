import styles from './styles.module.css';
import classnames from 'classnames';

import Logo from './img/logo.svg';
import { Link } from 'react-router-dom';

export const Header = ({ className }) => {
  return (
    <header className={classnames(styles.root, className)}>
      <Link to="/">
        <img src={Logo} alt="header logo" loading="lazy" />
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} to="/restaurant">
          Restaurants
        </Link>
        <Link className={styles.link} to="/cart">
          Cart
        </Link>
        <Link className={styles.link} to="/dishes">
          Dishes
        </Link>
      </div>
    </header>
  );
};
