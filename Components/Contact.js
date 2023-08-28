import React, { useState } from "react";
import style from "../styles/ComponentStyles/contact.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import Footer from "./Footer";
function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const details = { name, email, subject, message };
  async function SubmitHandler(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/addcustomerinfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    });

    const server = await response.json();
    console.log(server);
    // console.log(details);
  }
  return (
    <>
      <div className={style.top}>
        <div className={style.overlay}>
          <div className={style.header}>
            <div className={style.line}></div>
            <span>START A PROJECT</span>
            <h2>We&apos;ll love to hear from you</h2>
          </div>
          <div className={style.grid}>
            <div className={style.form}>
              <h3>SEND US A MESSAGE</h3>
              <form>
                <div className={style.message}>
                  <input
                    placeholder="Your Name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    placeholder="Your Email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    placeholder="Your Subject"
                    type="text"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <div className={style.extra}>
                    <input
                      placeholder="Your Message"
                      type="text"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div onClick={SubmitHandler}>
                    <button>Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className={style.info}>
              <h3>Contact Info</h3>
              <div className={style.visit}>
                <span>Visit Us</span>
                <ul>
                  <li>23 okesuna street </li>
                  <li>Lagos Island</li>
                  <li>Lagos</li>
                </ul>
              </div>
              <div className={style.visit}>
                <span>Email</span>
                <ul>
                  <Link href="mailto:ralphadigital@gmail.com">
                    <li>ralphadigital@gmail.com</li>
                  </Link>
                  <Link href="mailto:abdulraufrasheed15@gmail.com">
                    <li>abdulraufrasheed15@gmail.com</li>
                  </Link>
                </ul>
              </div>
              <div className={style.visit}>
                <span>Call Us</span>
                <ul>
                  <li>New Project</li>
                  <Link href="tel:+2349127805458">
                    <li>Phone: (+234)9127805458</li>
                  </Link>
                </ul>
              </div>
              <div className={style.media}>
                <BsFacebook size={30} />
                <Link href="tel:+2349127805458">
                  <BsWhatsapp size={30} style={{ color: "white" }} />
                </Link>
                <Link href="https://www.instagram.com/ralphadigital/">
                  <AiFillInstagram size={32} style={{ color: "white" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
