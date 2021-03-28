import React from "react";
import style from "./contacts.module.css";
import { SocialLinks } from "../socialLinks/SocialLinks";
import { Logo } from "../logo/Logo";
// import { Logo } from "../../svgcomponents/Logo";

export const Contacts = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.line}></div>
        <div className={style.address}>
          <span className={style.address__title}>Address</span>
          <span className={style.address__data}>Киев, ул.Ломоносова</span>
        </div>
        <div className={style.line}></div>
        <div className={style.phone}>
          <span className={style.phone__title}>Tel</span>
          <span className={style.phone__data}>Kievstar Vodafone</span>
        </div>
        <div className={style.line}></div>
        <div className={style.mail}>
          <span className={style.mail__title}>Email</span>
          <span className={style.mail__data}>gmail</span>
        </div>
        <div className={style.line}></div>
        <div className={style.socials}>
          <span className={style.socials__title}>Socials</span>
          <span className={style.socials__data}>
            <SocialLinks />
          </span>
        </div>
        <div className={style.line}></div>
      </div>
      <div className={style.footer}>
        <Logo />
      </div>
    </div>
  );
};
