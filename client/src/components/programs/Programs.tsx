import React, { FunctionComponent, useEffect } from "react";
import icon1 from "../../images/icons/unicorn.png";
import icon2 from "../../images/icons/people.png";
import icon3 from "../../images/icons/timer.png";
import icon4 from "../../images/icons/books.png";
import icon5 from "../../images/icons/years_sales.png";
import icon6 from "../../images/icons/heads.png";
import icon7 from "../../images/icons/ЕМВА.png";
import icon8 from "../../images/icons/light.png";
import { Logo } from "../logo/Logo";
import MyPhoto from "../../images/handsPhoto/баннер сайт блог.png";
import style from "./programs.module.css";
import { ProgramCard } from "../programCard/ProgramCard";

export const Programs: FunctionComponent = () => {
  useEffect(() => {}, []);
  return (
    <main className={style.container}>
      <Logo />
      <section>
        <img src={MyPhoto} alt="photo" className={style.myPhoto} />
        <h1 className={style.title}>о программах</h1>
        <video src=""></video>
      </section>
      <section>
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
      <section>
        <h2 className={style.topic}>программы для жизни</h2>
        <ProgramCard />
        <ProgramCard />
      </section>
      <section>
        <h2 className={style.topic}>форматы работы</h2>
        <ul className={style.formats}>
          <li className={style.format}>
            <div className={style.formatTitle}></div>
            <div className={style.formatDescription}></div>
          </li>
          <li className={style.format}>
            <div className={style.formatTitle}></div>
            <div className={style.formatDescription}></div>
          </li>
          <li className={style.format}>
            <div className={style.formatTitle}></div>
            <div className={style.formatDescription}></div>
          </li>
          <li className={style.format}>
            <div className={style.formatTitle}></div>
            <div className={style.formatDescription}></div>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>отзывы</h2>
        <ul className={style.list}>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
          <li className={style.card}>
            <img src={icon1} alt="horse" className={style.image} />
            <p className={style.description}>ценность</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>стандарты работы</h2>
        <ul className={style.programs}>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
          <li className={style.program}></li>
        </ul>
      </section>
      <section>
        <h2 className={style.topic}>ценности</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolores provident vero reiciendis similique dolor soluta nemo officiis
          suscipit quasi. Ducimus labore repudiandae maxime, sequi illum
          voluptate suscipit cum, dolore nostrum totam ad quaerat aliquam? Nisi
          asperiores quam dolore adipisci voluptates amet, similique fuga
          quaerat temporibus odio, voluptate molestiae doloribus excepturi
          beatae repellendus soluta perferendis quidem quibusdam iste quasi?
          Maiores consequuntur ab labore odio! Velit consectetur magni quis
          reprehenderit ratione.
        </p>
      </section>
      <section>
        <h2 className={style.topic}>задать вопрос</h2>
        <p className={style.text}>записатся на встречу</p>
      </section>
      {/* <p className={style.story} data-cursor-active>
      My story
    </p>
    <footer className={style.footer}>
      <Logo />
    </footer> */}
    </main>
  );
};
