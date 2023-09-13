"use client";

import style from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={style.intro}>
      <div className={style.intro__container}>
        <h1 className={style.intro__h1}>Трезвый водитель 24/7</h1>
        <p className={style.intro__p}>г. Новокузнецк</p>
        <div className={style.intro__container__button}>
          <button className={style.intro__button + ' ' + style.telegram}>
            <a
              className={style.intro__link}
              href="https://t.me/vladimirovich0004"
              target=" blank"
            >
              Telegram
            </a>
          </button>
          <button className={style.intro__button + ' ' + style.number}>
            <a className={style.intro__link} href="tel:+79996480004">
              Позвонить
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
