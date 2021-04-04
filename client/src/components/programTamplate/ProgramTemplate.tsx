import React from "react";
import { Logo } from "../logo/Logo";
import MyPhoto from "../../images/handsPhoto/баннер сайт блог.png";
import icon1 from "../../images/icons/unicorn.png";
import { ModuleProgram } from "../programModule/ProgramModule";
import style from "./programTemplate.module.css";

export const ProgramTemplate = () => {
  return (
    <>
      <header className={style.header}>
        <Logo />
        <img src={MyPhoto} alt="myPhoto" className={style.myPhoto} />
      </header>
      <main>
        <section className={style.section}>
          <h2 className={style.topic}>название курса</h2>
          <video src=""></video>
          <p className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            facere libero in obcaecati dolore ipsam quis odit error
            necessitatibus, pariatur modi? Adipisci at fugiat, alias pariatur
            eum vitae quo! Non!
          </p>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>цели программы</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quam
            laudantium nostrum exercitationem maxime sunt, cumque dolor vel
            voluptatum non libero blanditiis? Dolores placeat porro quod
            doloremque, nemo aliquid. Vel!
          </p>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>вам обязательно нужна программа</h2>
          <ul className={style.list}>
            <li className={style.card}>
              <img src={icon1} alt="horse" className={style.image} />
              <p className={style.description}>программа</p>
            </li>
            <li className={style.card}>
              <img src={icon1} alt="horse" className={style.image} />
              <p className={style.description}>программа</p>
            </li>
            <li className={style.card}>
              <img src={icon1} alt="horse" className={style.image} />
              <p className={style.description}>программа</p>
            </li>
            <li className={style.card}>
              <img src={icon1} alt="horse" className={style.image} />
              <p className={style.description}>программа</p>
            </li>
            <li className={style.card}>
              <img src={icon1} alt="horse" className={style.image} />
              <p className={style.description}>программа</p>
            </li>
            <li className={style.card}>
              <img src={icon1} alt="horse" className={style.image} />
              <p className={style.description}>программа</p>
            </li>
          </ul>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>что будет в программе</h2>
          <div className={style.inProgram}>
            <span className={style.listNumber}>1</span>
            <span className={style.listText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </span>
          </div>
          <div className={style.inProgram}>
            <span className={style.listNumber}>2</span>
            <span className={style.listText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </span>
          </div>
          <div className={style.inProgram}>
            <span className={style.listNumber}>3</span>
            <span className={style.listText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </span>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.topic}>практическая часть программы</h2>
        </section>
        <section className={style.section}>
          <ModuleProgram />
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
