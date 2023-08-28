import React from "react";
import { ralpha1 } from "@/public/ICON";
import style from "../styles/ComponentStyles/footer.module.css";
import Image from "next/image";
import { Link } from "react-scroll";
function Footer() {
  return (
    <div className={style.top}>
      <div className={style.company}>
        <Image src={ralpha1} alt="" />
        <p>
          Trumbo is a creative digital agency
          <br /> and Technology Firm. We design,
          <br /> develop and execute integrated <br />
          digital solutions across the web, <br />
          social media and mobile platforms
        </p>
      </div>
      <div className={style.company}>
        <h3>Company</h3>
        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
          <p>About Us</p>
        </Link>
        <Link to="services" spy={true} smooth={true} offset={0} duration={500}>
          <p>Services </p>
        </Link>
        <Link to="works" spy={true} smooth={true} offset={0} duration={500}>
          <p>Our Works</p>
        </Link>
        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
          <p>Partners</p>
        </Link>
        <Link to="partners" spy={true} smooth={true} offset={0} duration={500}>
          <p>Partners</p>
        </Link>
        <Link to="values" spy={true} smooth={true} offset={0} duration={500}>
          <p>Values</p>
        </Link>
        <Link to="policy" spy={true} smooth={true} offset={0} duration={500}>
          <p>Privacy Policy</p>
        </Link>
      </div>
      <div className={style.company}>
        <h3>Additional Pages</h3>
        <Link href="">
          <p>Affiliate Program</p>
        </Link>
        <Link href="">
          <p>Blog </p>
        </Link>
        <Link href="">
          <p>Campus</p>
        </Link>
        <Link href="">
          <p>Carreers</p>
        </Link>
        <Link to="" spy={true} smooth={true} offset={0} duration={500}>
          <p>Events</p>
        </Link>
        <Link href="">
          <p>Terms And Condition</p>
        </Link>
        {/* <Link to="policy" spy={true} smooth={true} offset={0} duration={500}>
          <p>Privacy Policy</p>
        </Link> */}
      </div>
      <div className={style.company}>
        <h3>Get Notified</h3>

        <Link href="">
          <p>Join our community</p>
        </Link>
        <div className={style.form}>
          <input type="email" placeholder="Email Address" />
          <button>JOIN</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
