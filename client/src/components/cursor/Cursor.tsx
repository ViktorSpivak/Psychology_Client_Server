import React, { useState, useEffect, FunctionComponent } from "react";
import style from "./cursor.module.css";
import { useLocation } from "react-router-dom";

export const Cursor: FunctionComponent = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [linkHovered, setLinkHovered] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  let location = useLocation();
  let cursorStyle = linkHovered ? style.linkHovered : style.cursor;
  // let cursorFollower = linkHovered ? style.linkHovered : style.cursor;

  useEffect(() => {
    
    const pageElementsCollection:any = document
      .getElementById("root")
      ?.querySelectorAll("*");
      // ?.getElementsByTagName("*");
    // const pageElementsArr = Array.prototype.slice.call(pageElementsCollection);
    const pageElementsArr = [...pageElementsCollection];
    addEventListeners();
    handleLinkHoverEvents(pageElementsArr);
    setLinkHovered(false);
    
    return () => {
      removeEventListeners();
      removeHandleLinkHoverEvents(pageElementsArr);

    };
  }, [location]);

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
  const handleLinkHoverEvents = (pageElements: Array<HTMLElement>) => {
    pageElements.forEach((el) => {
      if (el.hasAttribute("data-cursor-active")) {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      }
    });
  };
  const removeHandleLinkHoverEvents = (pageElements: Array<HTMLElement>) => {
    pageElements.forEach((el) => {
      if (el.hasAttribute("data-cursor-active")) {
        el.removeEventListener("mouseover", () => setLinkHovered(true));
        el.removeEventListener("mouseout", () => setLinkHovered(false));
      }
    });
  };
  const cursorCoordinates = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };
  return (
    <div className={style.wrapper}>
      {hidden || <div className={cursorStyle} style={cursorCoordinates}></div>}
    </div>
  );
};
