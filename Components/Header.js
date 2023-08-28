import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { ralpha1 } from "@/public/ICON";
import style from "../styles/ComponentStyles/Header.module.css";
function Header({ isClick }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={style.header}>
        <Image src={ralpha1} alt="" height={0} width={150} priority />
        <div
          className={style.menu}
          onClick={() => {
            isClick();
          }}
        >
          <p>MENU</p>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </>
  );
}

export default Header;
