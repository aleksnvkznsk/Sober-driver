import style from "./Сontacts.module.css";

export default function Сontacts() {
  return (
    <div className={style.contacts}>
      <h1 className={style.contacts__header}>Контакты</h1>
      <div className={style.contacts__container}>
        <h1 className={style.contacts__text}>Telegram / vladimirovich0004</h1>
        <h1 className={style.contacts__text}>Телефон / +7 999 648 00 04</h1>
      </div>
    </div>
  );
}
