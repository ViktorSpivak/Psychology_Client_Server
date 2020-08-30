import React from "react";
import { Link } from "react-router-dom";
import style from "./navigation.module.css";

export const Navigation = () => {
  return (
    <div>
      <nav className={style.nav}>
        <Link to="/mystory" className={style.link}>
          Обо мне
        </Link>
        <Link to="/specialization" className={style.link}>
          Ситуации, когда ко мне обращаются
        </Link>
        <Link to="/howItWorks" className={style.link}>
          Как это работает
        </Link>
        <Link to="/contacts" className={style.link}>
          Как со мной связаться
        </Link>
        <Link to="/watch" className={style.link}>
          Посмотреть и почитать
        </Link>
      </nav>
    </div>
  );
};
