import React from "react";
import { AskMe } from "../askMe/AskMe";
import { Logo } from "../logo/Logo";
import { ProgramCard } from "../programCard/ProgramCard";
import style from "./signupProgram.module.css";
export const SignupProgram = () => {
  return (
    <main className={style.container}>
      <Logo />
      <section className={style.sections}>
        <h2 className={style.topic}>программы для бизнеса</h2>
        <ul className={style.businessPrograms}>
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </ul>
      </section>
      <section className={style.sections}>
        <h2 className={style.topic}>программы для жизни</h2>
        <ProgramCard />
        <ProgramCard />
      </section>
      <section className={style.sections}>
        <h2 className={style.topic}>записатся на бесплатную консультацию</h2>
        <ul className={style.consultations}>
          <li className={style.consultation}></li>
          <li className={style.consultation}></li>
          <li className={style.consultation}></li>
        </ul>
      </section>
      <section className={style.sections}>
        <h2 className={style.topic}>задать вопрос</h2>
        <AskMe />
      </section>
    </main>
  );
};
