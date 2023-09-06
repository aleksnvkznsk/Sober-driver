import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__inner}>
          <p className={style.header__logo}>Трезвый Водитель 24/7</p>
          <p className={style.phone}>
            +7 999 648 00 04
          </p>
        </div>
      </div>
    </header>
  );
}
