import React from 'react';

import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectIsRestaurantLoading, selectRestaurantById } from '../../store/restaurant/selectors';
import { Navigate, NavLink, Outlet, useParams } from 'react-router-dom';
import { RestaurantRating } from '../../containers/RestaurantRating/RestaurantRating';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const isLoading = useSelector(selectIsRestaurantLoading);
  const restaurant = useSelector((state) => selectRestaurantById(state, { restaurantId }));

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!restaurant) {
    return <Navigate to="/notFound" replace />;
  }

  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <RestaurantRating restaurantId={restaurantId} />
      <ul>
        <li>
          <NavLink to="menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
