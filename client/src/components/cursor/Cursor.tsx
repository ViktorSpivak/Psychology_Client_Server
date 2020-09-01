import React, { useState, useEffect, FunctionComponent } from "react";
import style from "./cursor.module.css";

export const Cursor: FunctionComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [linkHovered, setLinkHovered] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
  };

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };
  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };
  const cursorStyle = linkHovered ? style.linkHovered : style.cursor;
  return (
    <div className={style.wrapper}>
      {hidden || (
        <div
          className={cursorStyle}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        ></div>
      )}
    </div>
  );
};
