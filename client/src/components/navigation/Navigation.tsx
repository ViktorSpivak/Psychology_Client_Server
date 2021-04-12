import React from "react";
import { Link } from "react-router-dom";
import style from "./navigation.module.css";

export const Navigation = () => {
  return (
    <div>
      <nav className={style.nav}>
        <Link to="/mystory" className={style.link1} data-cursor-active>
          обо мне
        </Link>
        <Link to="/programs" className={style.link} data-cursor-active>
          программы
        </Link>
        <Link to="/formats" className={style.link} data-cursor-active>
          форматы &nbsp;работы
        </Link>
        <Link to="/SignUpForm/askMe" className={style.link} data-cursor-active>
          спросить
        </Link>
        <Link to="/watch" className={style.link5} data-cursor-active>
          <p>интересное</p>
        </Link>
      </nav>
    </div>
  );
};
