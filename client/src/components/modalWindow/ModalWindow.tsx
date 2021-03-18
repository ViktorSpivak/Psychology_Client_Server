import React, { useEffect } from "react";
import photo from "../../images/icons/light.png";
import { useAppDispatch } from "../../redux/hooks";
import {
  activeSendButton,
  noActiveSendButton,
} from "../../redux/slices/isActiveSendButtonSlice";
import { AppDispatch } from "../../redux/store";
import style from "./modalWindow.module.css";

export const ModalWindow = ({ props }: any) => {
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    dispatch(noActiveSendButton());
    return () => {
      dispatch(activeSendButton());
    };
  });
  return (
    <div>
      <div className={style.overlay}></div>
      <div className={style.card}>
        <img src={photo} alt="MyPhoto" className={style.myPhoto} />
        <p className={style.text}>
          {/* {typeof props === "Error"}`Уважаемый ${props.name} /\n $
          {props.response}` */}
        </p>
      </div>
    </div>
  );
};
