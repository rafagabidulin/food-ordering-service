import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishCountByid } from '../../store/cart/selectors';
import { selectDishById } from '../../store/dish/selectors';
import { cartSlice } from '../../store/cart';
import { Link } from 'react-router-dom';

export const Dish = ({ dishId, className, withoutActions }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) => selectDishCountByid(state, { dishId: dish?.id }));
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  const decrement = () => {
    dispatch(cartSlice.actions.removeDish(dish.id));
  };
  const increment = () => {
    dispatch(cartSlice.actions.addDish(dish.id));
  };

  return (
    <div className={classnames(styles.root, className)}>
      <Link to={`/dish/${dishId}`}>{dish.name}</Link>
      {!withoutActions && (
        <div>
          <Button onClick={decrement}>-</Button>
          {count}
          <Button onClick={increment}>+</Button>
        </div>
      )}
    </div>
  );
};
