import React from "react";
import style from "../styles/ComponentStyles/works.module.css";
import Image from "next/image";
import { tani, agency, backup, tokenize, nft } from "@/public/IMAGES";
import Link from "next/link";
import Partners from "./Partners";
function Works() {
  return (
    <>
      <div className={style.container} id="works">
        <p>RECENT WORKS</p>
        <h2>We love Great Work</h2>
        <div className={style.line}></div>
        <div className={style.imagecontainer}>
          <div className={style.images}>
            <Link href="/">
              <Image
                src={agency}
                height={0}
                width={0}
                className={style.image1}
              />
            </Link>
            <Link href="/about">
              <Image
                src={backup}
                height={0}
                width={0}
                className={style.image2}
              />
            </Link>
            <Link href="/">
              <Image
                src={tokenize}
                height={0}
                width={0}
                className={style.image3}
              />
            </Link>
            <Link href="">
              <Image src={nft} height={0} width={0} className={style.image4} />
            </Link>
          </div>
        </div>
      </div>
      <Partners />
    </>
  );
}

export default Works;
