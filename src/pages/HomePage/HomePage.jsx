import headerImage from './img/header-img.jpg';

import styles from './styles.module.css';

export const HomePage = () => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={headerImage} alt="order food" />
      <div className={styles.text}>
        <p>Order food</p>
        <p>from 175 restaurants</p>
      </div>
    </div>
  );
};
