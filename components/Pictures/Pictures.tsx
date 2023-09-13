"use client";

import style from "./Pictures.module.css";
import { motion } from "framer-motion";

const AnimationImg1 = {
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
const AnimationImg2 = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.15 },
  },
};
const AnimationImg3 = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
};
const AnimationImg4 = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.25 },
  },
};

export default function Pictures() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      className={style.pictures}
    >
      <motion.img
        variants={AnimationImg1}
        className={style.pictures__img}
        src="/Cars/Cadillac.jpg"
        alt=""
      />
      <motion.img
        variants={AnimationImg2}
        className={style.pictures__img}
        src="/Cars/Toyota.jpg"
        alt=""
      />
      <motion.img
        variants={AnimationImg3}
        className={style.pictures__img}
        src="/Cars/Subaru.jpg"
        alt=""
      />
      <motion.img
        variants={AnimationImg4}
        className={style.pictures__img}
        src="/Cars/Mazda.jpg"
        alt=""
      />
    </motion.div>
  );
}
