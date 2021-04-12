import React, { useEffect } from "react";
import photo from "../../images/icons/light.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  activeSendButton,
  noActiveSendButton,
} from "../../redux/slices/sendButtonSlice";
import { noActiveModalWindow } from "../../redux/slices/modalWindowSlice";
import style from "./modalWindow.module.css";
import { resetUserMassage } from "../../redux/slices/userMessageSlice";
import { Cross } from "../../svgСomponents/Cross";
import {
  selectIsActiveModalWindow,
  selectUserMessage,
} from "../../redux/selectors";

export const ModalWindow = () => {
  const dispatch = useAppDispatch();
  const isActiveModalWindow = useAppSelector(selectIsActiveModalWindow);
  const { userData, error, response } = useAppSelector(selectUserMessage);
  let text: string | undefined = response?.data;
  if (error) {
    text = `${
      userData!.name
    }, спасибо что оставили отзыв, но что-то пошло не так :( \n
      Попробуйте ещё раз позже `;
  }

  useEffect(() => {
    isActiveModalWindow && dispatch(noActiveSendButton());
    return () => {
      dispatch(activeSendButton());
    };
  }, []); // eslint-disable-line

  const turnoffModalWindow = () => {
    dispatch(noActiveModalWindow());
    dispatch(resetUserMassage());
  };
  return (
    <>
      {isActiveModalWindow && (
        <div className={style.container}>
          <div className={style.overlay} onClick={turnoffModalWindow}></div>
          <div className={style.card}>
            <button
              type="button"
              className={style.button}
              onClick={turnoffModalWindow}
              data-cursor-active
            >
              <Cross />
            </button>
            <img src={photo} alt="MyPhoto" className={style.myPhoto} />
            <p className={style.text}>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};
