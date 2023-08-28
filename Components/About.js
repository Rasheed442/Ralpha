import React, { useState, useEffect } from "react";
import style from "../styles/ComponentStyles/about.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Services from "../Components/Services";
import Image from "next/image";
import { varr, com, env } from "@/public/IMAGES";
// import CountUp from "react-countup";
function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={style.up} id="about">
        <div className={style.container} data-aos="fade-up">
          <span>HELLO CHIEF !</span>
          <h2>We Are Ralpha</h2>
          <div className={style.line}></div>
          <p>
            We are a team of creatives that design influential brands and
            digital
            <br />
            experiences with the aim of helping you grow your business,
            promoting
            <br /> visibility for your brand as well as a great user experience.
          </p>
          <div className={style.main}>
            <div className={style.reach}>
              <h3>232</h3>
              <p>Reach</p>
            </div>
            <div className={style.line2}></div>
            <div className={style.reach}>
              {/* <CountUp start={0} end={100} duration={2.5} /> */}
              <h3>376+</h3>

              <p>Lines of code</p>
            </div>
            <div className={style.line2}></div>
            <div className={style.reach}>
              <h3>70+</h3>
              <p>Project Completed</p>
            </div>
            <div className={style.line2}></div>
            <div className={style.reach}>
              <h3>55+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className={style.images}>
            <Image
              src={varr}
              width={0}
              height={0}
              priority
              className={style.img1}
            />
            <Image
              src={env}
              width={0}
              height={0}
              priority
              className={style.img3}
            />
            <Image
              src={com}
              width={0}
              height={0}
              priority
              className={style.img2}
            />
          </div>
        </div>
      </div>
      <Services />
    </>
  );
}

export default About;
