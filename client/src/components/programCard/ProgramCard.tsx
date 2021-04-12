import React from "react";
import { Link } from "react-router-dom";
import style from "./programCard.module.css";
interface IProp {
  program?: string;
}
export const ProgramCard = ({ program }: IProp) => {
  const path = "/signUpForm/" + program;
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
          <Link to={path} data-cursor-active>
            <button className={style.btn}>записаться</button>
          </Link>
          <Link to="/programTemplate" data-cursor-active>
            <button className={style.btn}>подробности</button>
          </Link>
        </div>
      </li>
    </>
  );
};
