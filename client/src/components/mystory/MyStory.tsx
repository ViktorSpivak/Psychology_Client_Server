import React from "react";
import { Logo } from "../logo/Logo";
import style from "./myStory.module.css";

export const MyStory = () => {
  return (
    <div className={style.container}>
      <p className={style.story} data-cursor-active>
        My story
      </p>
      <footer className={style.footer}>
        <Logo />
      </footer>
    </div>
  );
};
