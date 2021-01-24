import React, { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Logo } from "../../svgcomponents/Logo";
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";
import { SocialLinks } from "../socialLinks/SocialLinks";
import { Wave } from "../wave/Wave";
import style from "./homepage.module.css";

export const HomePage: FunctionComponent = () => {
  const initSize = () => document.body.clientWidth;
  const [size, setSize] = useState<Number>(initSize());
  useEffect(() => {
    const actualWidth = () => setSize(initSize());
    actualWidth();
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  }, []);

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Logo />
        <SocialLinks />
      </header>
      <main className={style.main}>
        <div>
          <h1 className={style.title}>Юлия Сохач</h1>
          <nav className={style.prophesy} data-cursor-active>
            <Link to="/specialization" className={style.link}>
              коуч
            </Link>
            <Link to="/specialization" className={style.link}>
              ментор
            </Link>
            <Link to="/specialization" className={style.link}>
              психолог
            </Link>
          </nav>
        </div>
        <Navigation />
        <div className={style.wave}>
          <Wave />
        </div>
      </main>
      <footer className={style.footer}>
        <Link to="/game" className={style.gameClick} data-cursor-active>
          don`t click it
        </Link>
        {/* <div className={style.social}>{size < 768 && <SocialLinks />}</div>  */}
      </footer>
    </div>
  );
};
