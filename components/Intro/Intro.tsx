"use client";

import style from "./Intro.module.css";
import { motion } from "framer-motion";

const AnimationH1 = {
  hidden: {
      y: 50,
      opacity: 0,
  },
  visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 }
  }
}

const AnimationP = {
  hidden: {
      y: 50,
      opacity: 0,
  },
  visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 }
  }
}

const AnimationButton = {
  hidden: {
      y: 50,
      opacity: 0,
  },
  visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.4 }
  }
}

export default function Intro() {
  return (
    <motion.div initial="hidden" whileInView="visible" className={style.intro}>
      <div className={style.intro__container}>
        <motion.h1 variants={AnimationH1} className={style.intro__h1}>Трезвый водитель 24/7</motion.h1>
        <motion.p variants={AnimationP} className={style.intro__p}>г. Новокузнецк</motion.p>
        <motion.div variants={AnimationButton} className={style.intro__container__button}>
          <button className={style.intro__button + " " + style.telegram}>
            <a
              className={style.intro__link}
              href="https://t.me/vladimirovich0004"
              target=" blank"
            >
              Telegram
            </a>
          </button>
          <button className={style.intro__button + " " + style.number}>
            <a className={style.intro__link} href="tel:+79996480004">
              Позвонить
            </a>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
