import React from "react";
import DotLoader from "react-spinners/DotLoader";
import style from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={style.container}>
      <DotLoader color={"#eb7f21"} />
    </div>
  );
};
