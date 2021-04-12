import React from "react";
import style from "./participationFormats.module.css";

export const ParticipationFormats = () => {
  return (
    <div className={style.conditions}>
      <div className={style.row}>
        <span className={style.col1}></span>
        <span className={style.col2}>Гость</span>
        <span className={style.col3}>Основной</span>
        <span className={style.col4}>Премиум</span>
      </div>
      <div className={style.row}>
        <span className={style.col1}>Доступ к программе обучения</span>
        <span className={style.col2}></span>
        <span className={style.col3}></span>
        <span className={style.col4}></span>
      </div>
      <div className={style.row}>
        <span className={style.col1}>Домашние задания</span>
        <span className={style.col2}></span>
        <span className={style.col3}></span>
        <span className={style.col4}></span>
      </div>
      <div className={style.row}>
        <span className={style.col1}>Чат группы</span>
        <span className={style.col2}></span>
        <span className={style.col3}></span>
        <span className={style.col4}></span>
      </div>
      <div className={style.row}>
        <span className={style.col1}>Сопровождение и поддержка в чате</span>
        <span className={style.col2}></span>
        <span className={style.col3}></span>
        <span className={style.col4}></span>
      </div>
      <div className={style.row}>
        <span className={style.col1}>
          Дополнительный 10 й модуль, исходя из потребностей группы
        </span>
        <span className={style.col2}></span>
        <span className={style.col3}></span>
        <span className={style.col4}></span>
      </div>
      <div className={style.row}>
        <span className={style.col1}>Индивидуальные консультации</span>
        <span className={style.col2}></span>
        <span className={style.col3}></span>
        <span className={style.col4}></span>
      </div>
      <div className={style.row}>
        <span className={style.col1}>Другое</span>
        <span className={style.col2}></span>
        <span className={style.col3}></span>
        <span className={style.col4}></span>
      </div>
      <div className={style.row}>
        <span className={style.col1}>Стоимость</span>
        <span className={style.col2}></span>
        <span className={style.col3}></span>
        <span className={style.col4}></span>
      </div>
      <div className={style.row}>
        <span className={style.col1}></span>
        <div className={style.col2}>
          <button className={style.btn} type="button" data-cursor-active>
            записаться
          </button>
        </div>
        <div className={style.col3}>
          <button className={style.btn} type="button" data-cursor-active>
            записаться
          </button>
        </div>
        <div className={style.col4}>
          <button className={style.btn} type="button" data-cursor-active>
            записаться
          </button>
        </div>
      </div>
      <div className={style.row}>
        <span className={style.col1}></span>
        <span className={style.col2}></span>
        <span className={style.col3}></span>
        <span className={style.col4}></span>
      </div>
    </div>
  );
};
