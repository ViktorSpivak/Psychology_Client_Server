import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { SimpleSlider } from "../slider/Slider";
import { feedbackThunk } from "../../redux/slices/feedbackSlice";
import style from "./feedback.module.css";
import { selectFeedback } from "../../redux/selectors";

export const Feedback = () => {
  const { feedbackList, error } = useSelector(selectFeedback);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(feedbackThunk({ page: 1 }));
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  error && console.log('Компонент "Feedback" не отрисован ', error.message);
  return (
    <>
      {feedbackList && (
        <div>
          <h2 className={style.title}>отзывы</h2>
          <SimpleSlider list={feedbackList} />
        </div>
      )}
    </>
  );
};
