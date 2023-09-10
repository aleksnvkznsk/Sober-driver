"use client";

import style from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={style.intro}>
      <div className={style.intro__container}>
        <div className={style.intro__container__block}>
          <p className={style.intro__header}>
            Трезвый Водитель 24/7 Новокузнецк
          </p>
          <div className={style.intro__links}>
            <a
              href="https://t.me/vladimirovich0004"
              target=" blank"
              className={style.introLinksHref}
            >
              Telegram / vladimirovich0004
            </a>
            <a href="tel:+79996480004" className={style.introLinksPhone}>
              +7 999 648 00 04
            </a>
          </div>
        </div>

        <div className={style.intro__container__about}>
          <p className={style.about__text}>
            В некоторых случаях водителям автомобилей приходится отказываться от
            поездки на своем автомобиле из-за различных причин, например, из-за
            усталости или употребления спиртных напитков. Однако существует
            услуга, которая может помочь в таких ситуациях - Трезвый водитель.
            Теперь вам не нужно бросать свой автомобиль где-то до утра или
            рисковать своей безопасностью, садясь за руль в нетрезвом или
            уставшем состоянии. Специалист прибудет по
            указанному адресу и довезет вас на вашем собственном автомобиле до
            нужного места, обеспечивая комфорт и безопасность на дороге.
          </p>
        </div>
      </div>
    </div>
  );
}
