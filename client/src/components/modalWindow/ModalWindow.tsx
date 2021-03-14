import React, { FC } from "react";
import style from "./modalWindow.module.css";
export const ModalWindow: FC<{ text: string }> = ({ text }) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img src="/" alt="MyPhoto" />
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};
