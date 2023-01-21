import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { Sizes } from "../../constants/sizes";
import React from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import { User } from "../User/User";

export const Review = ({ id }) => {
  const review = useSelector((state) =>
    selectReviewById(state, { reviewId: id })
  );

  if (!review) {
    return null;
  }

  return (
    <div className={styles.root}>
      <span>{review.text}</span>
      <User id={review.userId} />
      <Rating size={Sizes.s} value={review.rating} />
    </div>
  );
};
