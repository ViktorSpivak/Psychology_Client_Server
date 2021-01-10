import React from "react";
// import { AiOutlineFacebook } from "react-icons/ai";
// import { AiOutlineLinkedin } from "react-icons/ai";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { IconContext } from "react-icons";
import Facebook from "../../images/socialIcons/facebook.png";
import Insta from "../../images/socialIcons/INSTA.png";
import Youtube from "../../images/socialIcons/youtube.png";
import style from "./sociallinks.module.css";

export const SocialLinks = () => {
  const face = () => {
    const actualWindowHeight = window.innerHeight;
    window.open(
      "https://www.facebook.com/yulia.sokhach?viewas=100000686899395&privacy_source=timeline_gear_menu&entry_point=action_bar#_ ",
      "",
      `Toolbar=1,Location=0,Directories=0,Status=0,Menubar=0,Scrollbars=0,Width=550,Height=${actualWindowHeight}`
    );
  };

  return (
    <div className={style.container}>
      {/* <IconContext.Provider value={{ size: "50px" }}>
        <AiOutlineFacebook onClick={face} />
        <AiOutlineLinkedin onClick={face} />
        <AiOutlineInstagram onClick={face} />
      </IconContext.Provider> */}

      <img
        src={Facebook}
        alt="facebook"
        className={style.img}
        onClick={face}
        data-cursor-active
      />

      <img
        src={Insta}
        alt="insta"
        className={style.img}
        onClick={face}
        data-cursor-active
      />

      <img
        src={Youtube}
        alt="youtube"
        className={style.img}
        onClick={face}
        data-cursor-active
      />
    </div>
  );
};
