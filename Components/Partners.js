import React from "react";
import style from "../styles/ComponentStyles/partners.module.css";
import { SiReactos } from "react-icons/si";
import { AiOutlineDropbox } from "react-icons/ai";
import {
  TbBrandAirtable,
  TbBrandBinance,
  TbBrandDiscord,
  TbBrandEnvato,
} from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Contact from "./Contact";
function Partners() {
  return (
    <>
      <div className={style.container} id="partners">
        <div className={style.top}>
          <div className={style.Partners}>
            <span>OUR PARTNERS</span>
            <h2>
              We are honored to have such Great
              <br /> Partners
            </h2>
          </div>
          <div className={style.icon}>
            <SiReactos style={{ color: "gray" }} size={100} />
            <AiOutlineDropbox style={{ color: "gray" }} size={100} />
            <TbBrandAirtable style={{ color: "gray" }} size={100} />
            <TbBrandBinance style={{ color: "gray" }} size={100} />
            <TbBrandDiscord style={{ color: "gray" }} size={100} />
            <TbBrandEnvato style={{ color: "gray" }} size={100} />
          </div>
          <div className={style.line}></div>
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={style.swiper}
          >
            <SwiperSlide className={style.swiperslide}>
              <p>
                Raplha is a great resource for getting your business found on
                the <br />
                web and making sure your brand gets in front of your customers.
                I
                <br /> use them for all my digital marketing needs and their
                customer
                <br /> support is top notch
              </p>
              <h3>Titilayo Yussuf</h3>
              <span>Founder, Ticaz Luggages</span>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.swiperslide}>
                <p>
                  I will always give credit to Trumbo for helping me launch my
                  <br /> website and saving me tons of money. I'm a small
                  business owner
                  <br /> and they helped me with a great amount of knowledge in
                  the
                  <br /> beginning. I definitely recommend them if you want to
                  start
                  <br />
                  your own business.
                </p>
                <h3>Abdulrahman Abdulrauf</h3>
                <span>Founder, Jago Stores</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.swiperslide}>
                <p>
                  I actually came across Trumbo through a friend, and it's
                  actually
                  <br /> been the best tool for me to continue growing my
                  business. I
                  <br /> appreciate how affordable it is, and how quickly you'll
                  be able to
                  <br /> see results.
                </p>
                <h3>Laura Joshua</h3>
                <span>CEO, Laura Tech</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Partners;
