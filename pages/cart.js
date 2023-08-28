import React, { useState, useEffect } from "react";
import Image from "next/image";
function cart() {
  const [data, setData] = useState([]);

  //   const dataarray = JSON.parse(CartProducts);

  useEffect(() => {
    const CartProducts =
      typeof window !== "undefined"
        ? window.localStorage.getItem("details")
        : null;

    if (CartProducts) {
      const parsedData = JSON.parse(CartProducts);
      setData(parsedData);
    }
  }, []);
  return (
    <div>
      {data?.map((d) => {
        return (
          <div>
            <p>{d.clothe}</p>
            <Image src={d.img} width={40} height={40} />
          </div>
        );
      })}
    </div>
  );
}

export default cart;
