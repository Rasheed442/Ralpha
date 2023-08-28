import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-scroll";
import style from "../styles/ComponentStyles/navmenu.module.css";
// import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
function NavMenu({ isClick }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={style.top} data-aos="slide-left" data-aos-duration="500">
      <div className={style.container}>
        <div className={style.close}>
          <p>Navigation</p>
          <AiOutlineClose
            onClick={() => {
              isClick();
            }}
          />
        </div>
        {/* <Link to="about" spy={true} smooth={true} offset={0} duration={500}><p>/about</p></Link> */}

        <div className={style.navlink}>
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            <p>Home</p>
          </Link>

          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            <p>About</p>
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p>Services</p>
          </Link>
          <Link to="works" spy={true} smooth={true} offset={0} duration={500}>
            <p>Works</p>
          </Link>
          <Link
            to="partners"
            spy={true}
            smooth={true}
            offset={700}
            duration={500}
          >
            <p>Partners</p>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <p>Contact</p>
          </Link>
        </div>
        <div className={style.footer}>
          Let’s help you lunch and Grow a <br />
          successful business. We are <br />
          digital transformation
          <br /> professionals who innovate and
          <br /> deliver.
        </div>
        <div className={style.socials}>
          <BsFacebook size={25} />
          <BsWhatsapp size={25} />
          <AiFillInstagram size={27} />
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
