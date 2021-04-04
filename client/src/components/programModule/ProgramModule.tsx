import React, { useState } from "react";
import style from "./programModule.module.css";

export const ModuleProgram = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <h2 className={style.title}>модули программы</h2>
      <div className={style.card}>
        <span>содержание</span>
        <span onClick={handleClick} data-cursor-active>
          &#43;
        </span>
      </div>
      {isOpen && (
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel
          iure animi consequuntur temporibus laudantium, quod, modi deserunt
          officia deleniti ut nobis iste! Nulla asperiores, quaerat laborum quis
          soluta aliquid!
        </p>
      )}
    </>
  );
};
