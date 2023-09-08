import style from "./Сontacts.module.css";

export default function Сontacts() {
  return (
    <div className={style.contacts}>
      <h1 className={style.contacts__header}>Контакты</h1>
      <div className={style.contacts__container}>

        <div className={style.contacts__container__info}>
          <h1 className={style.contacts__text}>Telegram</h1>
          <h1 className={style.contacts__href}>
            +7 999 648 00 04 / vladimirovich0004
          </h1>
        </div>

        <div className={style.contacts__container__info}>
          <h1 className={style.contacts__text}>Телефон</h1>
          <h1 className={style.contacts__href}>+7 999 648 00 04</h1>
        </div>

      </div>
    </div>
  );
}
