import React from "react";
import { Link } from "react-router-dom";
import style from "./logo.module.css";
export const Logo = () => {
  return (
    <Link to="/" className={style.logo}>
      <p className={style.logo__text}>YS coaching</p>
    </Link>
  );
};
