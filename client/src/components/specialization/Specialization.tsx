import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
// import { Logo } from "../logo/Logo";
import { Logo } from "../../svgcomponents/Logo";
import style from "./specialization.module.css";

export const Specialization = () => {
  const [turn1, setTurn1] = useState(false);
  const [turn2, setTurn2] = useState(false);
  const [turn3, setTurn3] = useState(false);
  const [turn4, setTurn4] = useState(false);
  useEffect(() => {
    const interval1 = setInterval(() => setTurn1((state) => !state), 8000);
    const interval2 = setInterval(() => setTurn2((state) => !state), 5000);
    const interval3 = setInterval(() => setTurn3((state) => !state), 7000);
    const interval4 = setInterval(() => setTurn4((state) => !state), 4000);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);
  return (
    <div className={style.container}>
      <ul className={style.specialization}>
        <li className={style.scene}>
          <CSSTransition in={turn1} timeout={1000} classNames={style}>
            <div className={style.card}>
              <div className={style.card__face} data-cursor-active>front</div>
              <div className={style.card__face_back} data-cursor-active>back</div>
            </div>
          </CSSTransition>
        </li>
        <li className={style.scene}>
          <CSSTransition in={turn2} timeout={1000} classNames={style}>
            <div className={style.card}>
              <div className={style.card__face} data-cursor-active>front</div>
              <div className={style.card__face_back} data-cursor-active>back</div>
            </div>
          </CSSTransition>
        </li>
        <li className={style.scene}>
          <CSSTransition in={turn3} timeout={1000} classNames={style}>
            <div className={style.card}>
              <div className={style.card__face} data-cursor-active>front</div>
              <div className={style.card__face_back} data-cursor-active>back</div>
            </div>
          </CSSTransition>
        </li>
        <li className={style.scene}>
          <CSSTransition in={turn4} timeout={1000} classNames={style}>
            <div className={style.card}>
              <div className={style.card__face} data-cursor-active>front</div>
              <div className={style.card__face_back} data-cursor-active>back</div>
            </div>
          </CSSTransition>
        </li>
      </ul>
      <div className={style.logo_modify}>
        <Logo width="200" height="200" />
      </div>
    </div>
  );
};
