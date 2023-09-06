"use client";

import style from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={style.intro} >
    <div className={style.intro__container}>
        <p  className={style.intro__header}>Трезвый Водитель 24/7</p>
        <div className={style.intro__links}>
            <a href="https://t.me/vladimirovich0004" target=" blank" className={style.introLinksHref}>Telegram / vladimirovich0004</a>
            <p className={style.introLinksPhone}>+7 999 648 00 04</p>
        </div>
    </div>
</div>
  );
}