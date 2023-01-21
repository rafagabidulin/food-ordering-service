import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/restaurant/selectors';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Tab = ({ id }) => {
  const { name } = useSelector((state) => selectRestaurantById(state, { restaurantId: id }));
  return (
    <NavLink
      to={id}
      className={({ isActive }) =>
        classnames(styles.root, {
          [styles.active]: isActive,
        })
      }>
      {name}
    </NavLink>
  );
};
