"use client";
import style from "./Price.module.css";
import { motion } from "framer-motion";

const AnimationText = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 },
  },
};

export default function Price() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={AnimationText}
      className={style.price}
    >
      <h1 className={style.price__header}>Стоимость услуги</h1>
      <div className={style.price__container}>
        <p className={style.price__container__text}>
          От <b> 999₽ </b> по цетральному району, остальные заказы оговариваются
          отдельно
        </p>
        <p className={style.price__container__text}>
          Звоните в любое время. Даже в 3.00 ночи. Подача водителя в течении 30
          минут. Любая техническая помощь на дороге - кончился бензин, сломался
          автомобиль, требуется помощь на дороге. Автомат/механика не имеет
          значения. Дополнительных расходов нет. Штраф за осаго оплачивается
          нами
        </p>
      </div>
    </motion.div>
  );
}
