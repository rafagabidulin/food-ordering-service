import React, { useEffect } from 'react';
import { Tabs } from '../../components/Tabs/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRestaurantLoading } from '../../store/restaurant/selectors';
import { fetchRestaurants } from '../../store/restaurant';
import { Outlet } from 'react-router-dom';

export const RestaurantPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsRestaurantLoading);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Tabs />
      <Outlet />
    </div>
  );
};
