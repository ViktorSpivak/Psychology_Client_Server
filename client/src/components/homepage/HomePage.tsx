import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import {
  noActiveSendButton,
  activeSendButton,
} from "../../redux/slices/sendButtonSlice";
import { AppDispatch } from "../../redux/store";
// import { Logo } from "../../svgcomponents/Logo";
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";
import { SocialLinks } from "../socialLinks/SocialLinks";
import { Wave } from "../wave/Wave";
import style from "./homepage.module.css";

export const HomePage = () => {
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    dispatch(noActiveSendButton());
    return () => {
      dispatch(activeSendButton());
    };
  });
  // const initSize = () => document.body.clientWidth;
  // const [size, setSize] = useState<Number>(initSize());
  // useEffect(() => {
  //   const actualWidth = () => setSize(initSize());
  //   actualWidth();
  //   window.addEventListener("resize", actualWidth);
  //   return () => {
  //     window.removeEventListener("resize", actualWidth);
  //   };
  // }, []);

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
          <Wave canvasHeight={0.3 * window.innerHeight} />
        </div>
      </main>
      <footer className={style.footer}>
        <Link to="/game" className={style.gameClick} data-cursor-active>
          don`t click it
        </Link>
      </footer>
    </div>
  );
};
