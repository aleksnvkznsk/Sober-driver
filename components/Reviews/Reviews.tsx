"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import style from './Reviews.module.css';

import "swiper/css";

export default function Reviews() {
  return (
    <div className={style.reviews}>
      <Swiper
        className={style.swiper}
        slidesPerView={3}
        pagination
      >
        <SwiperSlide className={style.slide}>
          <p className={style.slide__name}>Денис</p>
          <p className={style.slide__reviews}>Водитель приехал вовремя , автомобиль доставлен по адресу . Оказанной услугой доволен .</p>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <p className={style.slide__name}>Владимир</p>
          <p className={style.slide__reviews}>Заказал услугу «трезвый водитель». Всю поездку было ехать одно удовольствие! Приятно одет и приятен в общении, приехал вовремя и вовремя привёз. Ещё буду обращаться!</p>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <p className={style.slide__name}>Александр</p>
          <p className={style.slide__reviews}>Услуга оказана на высоте, водитель вежлив, аккуратен и интересный в общении. всем советую</p>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <p className={style.slide__name}>Оксана</p>
          <p className={style.slide__reviews}>Вежливый и пунктуальный молодой человек  Доставил наш новый автомобиль из автосалона, ехал аккуратно Рекомендую !</p>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <p className={style.slide__name}>Дмитрий</p>
          <p className={style.slide__reviews}>Можно положиться на парня, все сделали как договаривались, вёл аккуратно, все ок</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
