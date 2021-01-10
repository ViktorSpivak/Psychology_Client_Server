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
        <Link to="/specialization" className={style.link} data-cursor-active>
          программы
        </Link>
        <Link to="/workStages" className={style.link} data-cursor-active>
          форматы &nbsp;работы
        </Link>
        <Link to="/contacts" className={style.link} data-cursor-active>
          спросить
        </Link>
        <Link to="/watch" className={style.link5} data-cursor-active>
          <p>
            интересное
          </p>
        </Link>
      </nav>
    </div>
  );
};
