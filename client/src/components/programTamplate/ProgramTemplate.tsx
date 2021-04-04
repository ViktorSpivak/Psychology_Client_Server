import React from "react";
import { Logo } from "../logo/Logo";
import MyPhoto from "../../images/handsPhoto/баннер сайт блог.png";
import style from "./programTemplate.module.css";

export const ProgramTemplate = () => {
  return (
    <>
      <header>
        <Logo />
        <img src={MyPhoto} alt="myPhoto" className={style.myPhoto} />
        <h2 className={style.topic}>название курса</h2>
      </header>
      <main>
        <section className={style.section}>
          <h2 className={style.topic}>цели программы</h2>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>вам обязательно нужна программа</h2>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>что будет в программе</h2>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>практическая часть программы</h2>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>модули программы</h2>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>как проходит обучение</h2>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>форматы участия</h2>
        </section>
      </main>
      <footer></footer>
    </>
  );
};
