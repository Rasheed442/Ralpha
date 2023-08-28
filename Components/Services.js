import React from "react";
import style from "../styles/ComponentStyles/service.module.css";
import { GiGearStickPattern } from "react-icons/gi";
import { SiMaterialdesignicons, SiWebmoney } from "react-icons/si";
import { TbSpeakerphone } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import { MdOutlineSendToMobile } from "react-icons/md";
import Works from "./Works";
function Services() {
  return (
    <div id="services">
      <div className={style.header}>
        <p>WHAT WE DO</p>
        <h2>
          We help launch and grow
          <br /> your business
        </h2>
        <div className={style.line}></div>
      </div>

      <div className={style.top}>
        <div className={style.main}>
          <div className={style.brand}>
            <GiGearStickPattern size={40} style={{ color: "#39b54a" }} />
            <div className={style.identity}>
              <h2>Brand Identity</h2>
              <p>
                Make your mark by crafting a strong and unique brand
                <br />
                identity. The right logo, slogan, or color scheme can
                <br />
                instantly evoke an emotion or get your name on people's
                <br />
                mental map. Let’s help you get it right from the start.
              </p>
            </div>
          </div>
          <div className={style.brand}>
            <SiMaterialdesignicons size={40} style={{ color: "#39b54a" }} />
            <div className={style.identity}>
              <h2>UI/UX</h2>
              <p>
                We’ve mastered art of designing easy-to-use interface &<br />
                pleasant user experience to enhance your user’s
                <br />
                satisfaction by improving the usability & pleasure
                <br />
                provided in the interaction between user & the product.
              </p>
            </div>
          </div>
          <div className={style.brand}>
            <TbSpeakerphone size={40} style={{ color: "#39b54a" }} />
            <div className={style.identity}>
              <h2>Digital Marketing</h2>
              <p>
                Being visible, relevant and valuable is key in today’s <br />
                digital age. Our multichannel & SEO campaigns are <br />
                uniquely targeted to your target audience in order to
                <br /> attract, engage, and convert them into customers.
              </p>
            </div>
          </div>
          <div className={style.brand}>
            <SiWebmoney size={40} style={{ color: "#39b54a" }} />
            <div className={style.identity}>
              <h2>Web Development</h2>
              <p>
                This is where creativity and design meet functionality
                <br /> and responsiveness. Web Development using the latest
                <br /> trends, techniques and best practices in web development
                <br />
                from the world's leading standards.
              </p>
            </div>
          </div>
          <div className={style.brand}>
            <BsBox size={40} style={{ color: "#39b54a" }} />
            <div className={style.identity}>
              <h2>Consulting</h2>
              <p>
                Our team of strategists, creatives and analysts work
                <br />
                together to create a unique strategy for each client. Our
                <br />
                clients experience a more targeted solution that extends
                <br />
                beyond the digital space to deliver results.
              </p>
            </div>
          </div>
          <div className={style.brand}>
            <MdOutlineSendToMobile size={40} style={{ color: "#39b54a" }} />
            <div className={style.identity}>
              <h2>App Development</h2>
              <p>
                Leverage our expertise, develop an exceptional, user-friendly
                <br /> iOS or Android App. App development projects may include
                <br />
                aspects of customizing the backend, or integrating servers,
                <br />
                messaging platforms and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Works />
    </div>
  );
}

export default Services;
