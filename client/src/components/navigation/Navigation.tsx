import React from "react";
import { Link } from "react-router-dom";
import style from "./navigation.module.css";

export const Navigation = () => {
  return (
    <div>
      <nav className={style.nav}>
        <Link to="/mystory" className={style.link} data-cursor-active>
          Обо мне
        </Link>
        <Link to="/specialization" className={style.link} data-cursor-active>
          Ситуации, когда ко мне обращаются
        </Link>
        <Link to="/howItWorks" className={style.link} data-cursor-active>
          Как это работает
        </Link>
        <Link to="/contacts" className={style.link} data-cursor-active>
          Как со мной связаться
        </Link>
        <Link to="/watch" className={style.link} data-cursor-active>
          Посмотреть и почитать
        </Link>
      </nav>
    </div>
  );
};
