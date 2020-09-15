import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

// import { Logo } from "../../svgcomponents/Logo";
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";
import { SocialLinks } from "../socialLinks/SocialLinks";
import { Wave } from "../wave/Wave";
import style from "./homepage.module.css";

export const HomePage: FunctionComponent = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Logo></Logo>
        <SocialLinks></SocialLinks>
      </header>
      <main className={style.main}>
        <h1 className={style.title}>Юлия Сохач</h1>

        <nav className={style.prophesy} data-cursor-active>
          <Link to="/spacialization/mentoring" className={style.link}>
            Коуч.
          </Link>
          <Link to="/spacialization/coaching" className={style.link}>
            Ментор.
          </Link>
          <Link to="/spacialization/psychology" className={style.link}>
            Психолог.
          </Link>
        </nav>
        <Navigation />
        <div className={style.wave}>
          <Wave />
        </div>
        <Link to="/game" className={style.gameClick} data-cursor-active>
          Don`t click it :)
        </Link>
        {/* <Link to="/signup" className={style.login}>
          <button>Sign up</button>
        </Link> */}
      </main>
    </div>
  );
};
