import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__inner}>
            <a
              className={style.footer__inner__links}
              href="https://aleksandrovdeveloper.ru"
              target=" blank"
            >
              сайт от Aleksandrov Developer
            </a>
          <div className={style.footerData}>Novosibirsk 2023</div>
        </div>
      </div>
    </div>
  );
}
