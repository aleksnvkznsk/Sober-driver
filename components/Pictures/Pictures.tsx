"use client";

import style from "./Pictures.module.css";

export default function Pictures() {
  return (
    <div className={style.pictures}>
      <img className={style.pictures__img} src="/Cars/Cadillac.jpg" alt="" />
      <img className={style.pictures__img} src="/Cars/Toyota.jpg" alt="" />
      <img className={style.pictures__img} src="/Cars/Subaru.jpg" alt="" />
      <img className={style.pictures__img} src="/Cars/Mazda.jpg" alt="" />
    </div>
  );
}
