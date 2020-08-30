import React from "react";
import { Logo } from "../../svgcomponents/Logo";
import style from "./myStory.module.css";

export const MyStory = () => {
  return (
    <div className={style.container}>
      <p className={style.story}>My story</p>
      <footer className={style.footer}>
        <Logo />
      </footer>
    </div>
  );
};
