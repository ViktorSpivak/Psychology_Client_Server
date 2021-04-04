import React from "react";
import { Link } from "react-router-dom";
import style from "./programCard.module.css";

export const ProgramCard = () => {
  return (
    <>
      <li className={style.businessProgram}>
        <div className={style.businessProgramElem}>
          <h3>название</h3>
        </div>
        <div className={style.businessProgramElem}>
          <h3>результат</h3>
        </div>
        <div className={style.businessProgramElem}>
          <button>записаться</button>
          <Link to="/program" data-cursor-active>
            <button>подробности</button>
          </Link>
        </div>
      </li>
    </>
  );
};
