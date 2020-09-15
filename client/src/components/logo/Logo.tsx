import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Images from "../../images/handsPhoto/Logo_1.png";
import style from "./logo.module.css";
export const Logo: FunctionComponent = () => {
  return (
    <Link to="/" className={style.logo} data-cursor-active>
      <img src={Images} alt="icon" className={style.img} />

      {/* <p className={style.logo__text}>YS coaching</p> */}
    </Link>
  );
};
