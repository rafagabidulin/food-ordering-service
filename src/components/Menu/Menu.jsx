import React, { useEffect } from "react";
import { Dish } from "../Dish/Dish";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../store/restaurant/selectors";
import { selectIsDishLoading } from "../../store/dish/selectors";
import { fetchDishes } from "../../store/dish";
import { useParams } from "react-router-dom";

export const Menu = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const menu = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId })
  );

  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(fetchDishes(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!menu?.length) {
    return null;
  }

  return (
    <div>
      <h3>Menu</h3>
      <div>
        {menu.map((id, index) => (
          <Dish
            key={id}
            dishId={id}
            isFirst={index === 0}
            className={styles.dish}
          />
        ))}
      </div>
    </div>
  );
};
