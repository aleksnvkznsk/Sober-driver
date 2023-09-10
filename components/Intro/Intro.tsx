"use client";

import style from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={style.intro}>
      <div className={style.intro__container}>
        <div className={style.intro__container__block}>
          <p className={style.intro__header}>Трезвый Водитель 24/7 Новокузнецк</p>
          <div className={style.intro__links}>
            <a
              href="https://t.me/vladimirovich0004"
              target=" blank"
              className={style.introLinksHref}
            >
              Telegram / vladimirovich0004
            </a>
            <a href="tel:+79996480004" className={style.introLinksPhone}>+7 999 648 00 04</a>
          </div>
        </div>

        <div className={style.intro__container__about}>
          <p className={style.about__text}>
            Бывают ситуации, когда автовладельцам приходится отказываться от
            поездки на авто из-за невозможности самостоятельно вести машину.
            Здесь на помощь приходит услуга «Трезвый водитель». Не придется
            бросать машину до утра или рисковать, садясь за руль в нетрезвом или
            уставшем состоянии, ведь можно вызвать на нужный адрес сотрудника,
            который довезет пассажира на его собственном автомобиле.
          </p>
        </div>
      </div>
    </div>
  );
}
