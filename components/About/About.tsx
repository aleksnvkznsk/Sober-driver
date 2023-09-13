'use client'

import style from "./About.module.css";
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
  }
}

export default function About() {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.3 }}
    className={style.about}>
      <motion.p variants={AnimationText} className={style.about__text}>
        В некоторых случаях водителям автомобилей приходится отказываться от
        поездки на своем автомобиле из-за различных причин, например, из-за
        усталости или употребления спиртных напитков. Однако существует услуга,
        которая может помочь в таких ситуациях - Трезвый водитель. Теперь вам не
        нужно бросать свой автомобиль где-то до утра или рисковать своей
        безопасностью, садясь за руль в нетрезвом или уставшем состоянии.
        Специалист прибудет по указанному адресу и довезет вас на вашем
        собственном автомобиле до нужного места, обеспечивая комфорт и
        безопасность на дороге.
      </motion.p>
    </motion.div>
  );
}
