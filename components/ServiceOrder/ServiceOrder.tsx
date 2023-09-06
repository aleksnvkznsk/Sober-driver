import style from "./ServiceOrder.module.css";

export default function ServiceOrder() {
  return (
    <div className={style.order}>
      <div className={style.order__container}>
        <p className={style.order__container__header}>
          Как заказать услугу Трезвый водитель?
        </p>
        <div className={style.order__container__info}>
            <div className={style.order__container__intro__paragraph}>
                <h1 className={style.order__container__intro__paragraph__h1}>1</h1>
                <p className={style.order__container__intro__paragraph__p}>Звоните или пишите нам</p>
            </div>
            <div className={style.order__container__intro__paragraph}>
                <h1 className={style.order__container__intro__paragraph__h1}>2</h1>
                <p className={style.order__container__intro__paragraph__p}>Обсуждаем поездку и стоимость</p>
            </div>
            <div className={style.order__container__intro__paragraph}>
                <h1 className={style.order__container__intro__paragraph__h1}>3</h1>
                <p className={style.order__container__intro__paragraph__p}>Трезвый водитель приезжает в нужное место</p>
            </div>
            <div className={style.order__container__intro__paragraph}>
                <h1 className={style.order__container__intro__paragraph__h1}>4</h1>
                <p className={style.order__container__intro__paragraph__p}>Трезвый водитель доставляет вас на вашем автомобиле</p>
            </div>
        </div>
      </div>
    </div>
  );
}
