"use client";
import style from "./ServiceOrder.module.css";
import { motion } from "framer-motion";

const AnimationHeader = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

const Animation1 = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.4 },
  },
};

const Animation2 = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Animation3 = {
  hidden: {
  y: -30,
    opacity: 0,
  },
  visible: {
  y: 0,
    opacity: 1,
    transition: { delay: 0.6 },
  },
};

const Animation4 = {
  hidden: {
  y: -30,
    opacity: 0,
  },
  visible: {
  y: 0,
    opacity: 1,
    transition: { delay: 0.7 },
  },
};

export default function ServiceOrder() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      className={style.order}
    >
      <div className={style.order__container}>
        <motion.p  variants={AnimationHeader} className={style.order__container__header}>
          Как заказать услугу Трезвый водитель?
        </motion.p>
        <div className={style.order__container__info}>
          <motion.div variants={Animation1} className={style.order__container__intro__paragraph}>
            <h1 className={style.order__container__intro__paragraph__h1}>1</h1>
            <p className={style.order__container__intro__paragraph__p}>
              Звоните или пишите нам
            </p>
          </motion.div>
          <motion.div variants={Animation2} className={style.order__container__intro__paragraph}>
            <h1 className={style.order__container__intro__paragraph__h1}>2</h1>
            <p className={style.order__container__intro__paragraph__p}>
              Обсуждаем поездку и стоимость
            </p>
          </motion.div>
          <motion.div variants={Animation3} className={style.order__container__intro__paragraph}>
            <h1 className={style.order__container__intro__paragraph__h1}>3</h1>
            <p className={style.order__container__intro__paragraph__p}>
              Трезвый водитель приезжает в нужное место
            </p>
          </motion.div>
          <motion.div variants={Animation4} className={style.order__container__intro__paragraph}>
            <h1 className={style.order__container__intro__paragraph__h1}>4</h1>
            <p className={style.order__container__intro__paragraph__p}>
              Трезвый водитель доставляет вас на вашем автомобиле
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
